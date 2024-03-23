import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../utils/queries";
import Auth from "../utils/auth";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

// Utility function for conditional class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Cards() {
  const userProfile = Auth.getProfile();
  const userId = userProfile?.data?._id;
  console.log(userProfile.data.username);

  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { userId },
    skip: !userId, // Only proceed if userId is available
  });

  // Extract conversation data if available
  const conversationData = data?.user?.conversation;
  console.log(conversationData);

  if (loading) return <p>Loading conversations...</p>;
  if (error) return <p>Error loading conversations: {error.message}</p>;

  const conversations = conversationData
    ? [
        {
          id: conversationData._id,
          name: conversationData.conversationTitle,
          preview: conversationData.conversationText,
          buddy: userProfile.data.username, // replace with userProfile.data.buddy once that's ready
          icon: ChatBubbleOvalLeftEllipsisIcon,
        },
      ]
    : [];

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {conversations.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-green-700 bg-opacity-80 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="ml-16 p-3 text-2xl font-semibold text-gray-900">
                {/* -------------limit the characters to 30 max------------- */}
                {item.name.slice(0, 15)}
                {item.name.length > 15 ? "..." : ""}
              </h2>
            </dt>
            <dd className="mb-8 p-1 flex-col items-baseline sm:pb-3">
              <p className="flex justify-center text-med font-medium bg-orange-100 rounded-md text-gray-800">
                {/* -------------limit the characters to 30 max------------- */}
                {item.preview.slice(0, 20)}
                {item.preview.length > 20 ? "..." : ""}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
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
