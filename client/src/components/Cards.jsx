import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../utils/queries";
import Auth from "../utils/auth";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function Cards() {
  const userProfile = Auth.getProfile();
  const userId = userProfile?.data?._id;

  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { userId },
    skip: !userId, // Only proceed if userId is available
  });

  // Extract conversation data if available
  const conversationData = data?.user?.conversation;

  if (loading) return <p>Loading conversations...</p>;
  if (error) return <p>Error loading conversations: {error.message}</p>;

  const conversations = conversationData
    ? [
        {
          id: conversationData._id,
          name: conversationData.conversationTitle,
          preview: conversationData.conversationText,
          buddy: userProfile.data.username,
          icon: ChatBubbleOvalLeftEllipsisIcon,
        },
      ]
    : [];

  // Function to handle starting a new conversation
  const handleNewConversation = () => {
    // Navigate to new conversation page or component
    console.log("is this working? YUP! :)");
  };

  return (
    <div>
                <h2 className="text-xlg font-semibold leading-6 text-gray-900">Your Bench</h2>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
          onClick={handleNewConversation}
          className="cursor-pointer relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-12 shadow sm:px-6 sm:pt-6 hover:bg-orange-200"
        >
          <dt>
            <div className="absolute rounded-md bg-green-700 bg-opacity-80 p-3">
              <PlusIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="ml-16 p-3 text-2xl font-semibold text-gray-900">
              Start a New Conversation
            </h2>
          </dt>
          <dd className="mb-8 p-1 flex justify-center items-baseline sm:pb-3">
            <p className="text-med font-medium text-gray-800">
              Share your thoughts with a listener.
            </p>
          </dd>
        </div>
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
        
      </dl>
    </div>
  );
}
