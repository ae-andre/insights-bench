import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { GET_USER_BY_ID } from "../utils/queries";
import Auth from "../utils/auth";
import { ChatBubbleOvalLeftEllipsisIcon, PlusIcon } from "@heroicons/react/24/outline";
import UserConversation from "./UserConversation";

export default function Cards() {
  const navigate = useNavigate(); // Initialize navigate for redirection
  const userProfile = Auth.getProfile();
  const userId = userProfile?.data?._id;

  const [isViewingConversation, setIsViewingConversation] = useState(false); // State to toggle view


  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { userId },
    skip: !userId, 
  });

  const conversationData = data?.user?.conversation;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data?.user;

  if (isViewingConversation) {
    return <UserConversation onClose={() => setIsViewingConversation(false)} />;
  }

  const conversations = conversationData
  ? [
      {
        id: conversationData._id,
        name: conversationData.conversationTitle,
        preview: conversationData.conversationText,
        buddy: "your buddy", // ------EDIT ONCE buddy is available-------
        icon: ChatBubbleOvalLeftEllipsisIcon,
      },
    ]
  : [];

  // Conditions for rendering different cards
  const isEmptyListenerBench = user?.role === 'listener' && !user?.conversation;
  const hasConversation = !!user?.conversation;
  const isSharerWithConversation = user?.role === 'sharer' && !!user?.conversation;

  // Function to navigate to home page
  const goToHomePage = () => navigate("/");
  const openConversation = () => { 
    return (
      <UserConversation></UserConversation>
    );
  };

  // Render function based on conditions
  const renderCard = () => {
    if (isEmptyListenerBench) {
      return (
        <div onClick={goToHomePage} className="cursor-pointer hover:bg-orange-200 relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-12 shadow sm:px-6 sm:pt-6">
          <p>Your bench is currently empty, please contribute your wisdom at the pavilion.</p>
        </div>
      );
    } else if (hasConversation) {
      return (
        <div onClick={ () => setIsViewingConversation(true)}>
        {conversations.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:bg-orange-200 relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-green-700 bg-opacity-80 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="ml-16 p-3 text-2xl font-semibold text-gray-900">
                {/* -------------limit the characters to 22 max------------- */}
                {item.name.slice(0, 22)}
                {item.name.length > 22 ? "..." : ""}
              </h2>
            </dt>
            <dd className="mb-8 p-1 flex-col items-baseline sm:pb-3">
              <p className="flex justify-center text-med font-medium bg-orange-100 rounded-md text-gray-800">
                {/* -------------limit the characters to 33 max------------- */}
                {item.preview.slice(0, 37)}
                {item.preview.length > 37 ? "..." : ""}
              </p>
              <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Your sharing this bench with {item.buddy}
                  </p>
                  {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View conversation<span className="sr-only"> {item.name} details</span>
                  </a> */}
                </div>
              </div>
            </dd>
          </div>
        ))}
        </div>
      );
    } else if (isSharerWithConversation) {
      return (
        <div onClick={handleNewConversation} className="cursor-pointer relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-12 shadow sm:px-6 sm:pt-6 hover:bg-orange-200">
          <dt>
            <div className="absolute rounded-md bg-green-700 bg-opacity-80 p-3">
              <PlusIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="ml-16 p-3 text-2xl font-semibold text-gray-900">Start a New Conversation</h2>
          </dt>
          <dd className="mb-8 p-1 flex justify-center items-baseline sm:pb-3">
            <p className="text-med font-medium text-gray-800">Share your thoughts with a listener.</p>
          </dd>
        </div>
      );
    }
    // Default case if none of the conditions are met
    return null;
  };

  return (
    <div>
      <h2 className="text-xlg font-semibold leading-6 text-gray-900">Your Bench</h2>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {renderCard()}
      </dl>
    </div>
  );
}
