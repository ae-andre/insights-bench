import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../utils/queries';
import Auth from '../utils/auth';
import ConversationsForm from "../components/ConversationsForm";
import Cards from "../components/Cards";

export default function MyBench() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasConversation, setHasConversation] = useState(false);

  const userProfile = Auth.getProfile();
  const userId = userProfile?.data?._id; 

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId },
    skip: !Auth.loggedIn(), // Skip query if not logged in
    onCompleted: data => {
      // Set hasConversation based on whether the conversation object exists and has an _id
      setHasConversation(!!data.user.conversation?._id);
    }
  });

  useEffect(() => {
    setIsLoggedIn(Auth.loggedIn());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-screen">
            <h3 className="text-xlg font-semibold leading-6 text-gray-900">Your Bench</h3>
      <div>
        {isLoggedIn && hasConversation ? <Cards /> : <ConversationsForm />}
      </div>
    </div>
  );
}
