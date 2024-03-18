// This file contains code that will render the Home page/landing page
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import ConversationsList from '../components/ConversationsList';
import Conversation from '../components/Conversation';
import { GET_ALL_PUBLIC_CONVERSATIONS } from '../utils/queries';
import './Home.css'

const Home = () => {
    // Use state to manage the display of conversations and the conditional rendering of the welcome blurb, start a conversation dialogue or detailed conversation view
    const [conversationsByCategory, setConversationsByCategory] = useState(new Map());
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    console.log("What the homepage (parent component) is passing to Conversation component as selectedConversationId:", selectedConversationId); 

    // Expect that conversations will be an array of fetched conversation objects
    const { loading, error, data } = useQuery(GET_ALL_PUBLIC_CONVERSATIONS);

    useEffect(() => {
      console.log("Data in Home component:", data); // Log data to check if it's available
        if (data && data.conversations) {
          // Sorting logic: Group conversations by expertiseCategory
          const categorizedConversations = new Map();
    
          data.conversations.forEach((conversation) => {
            const category = conversation.expertise;
            if (!categorizedConversations.has(category)) {
                categorizedConversations.set(category, []);
            }
            categorizedConversations.get(category).push(conversation);
          });

          // Log the categorized conversations to see if they are correctly grouped
          console.log("Categorized Conversations:", categorizedConversations);
    
          // Set conversationsByCategory state
          setConversationsByCategory(categorizedConversations);
      }
  }, [data]);
  
  const handleConversationClick = (conversationId) => {
    console.log('Clicked conversation ID:', conversationId);
    localStorage.setItem('selectedConversationId', conversationId);
    setSelectedConversationId(conversationId);
    console.log('Selected conversation ID after update:', selectedConversationId);
  };  

  return (
    <div className="main-content container">
        <div className="row">
            {selectedConversationId ? (
                <Conversation
                    conversationId={selectedConversationId}  
                    onClose={() => setSelectedConversationId(null)}
                />
            ) : (
                <>
                    <div className="col">
                        <div className="welcome-blurb-public-conversation-forum">
                            <h2>Welcome to Soul Bench</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quae eos error, voluptatem iure dolorum cumque quas totam voluptate at, odit temporibus animi nam sint quo maiores consequuntur! Doloribus, fugit. Non, rerum. Animi atque cum eum incidunt mollitia. Molestias reprehenderit optio dignissimos sed hic debitis cupiditate similique dolor culpa nostrum, nisi earum labore pariatur ipsam atque ex ut eius recusandae expedita fugit! Ab laudantium nemo illo distinctio libero accusamus unde enim. Delectus laborum beatae eius error consequatur officia corrupti vel asperiores optio nihil tenetur inventore voluptatem praesentium rerum, rem odio! Magni ipsa repudiandae natus blanditiis adipisci, ratione aspernatur excepturi animi labore earum culpa aut provident non, quasi distinctio, aliquid minima. Rem dolores itaque minima possimus, in provident ullam similique doloremque voluptates eligendi, soluta voluptas tempora. Illo quo accusamus quas est, et beatae nobis libero quidem nostrum sit quod, cumque vero iure praesentium, consequuntur veritatis facere assumenda exercitationem porro neque. Quod, nesciunt molestias quo dolore alias repellendus ad explicabo id distinctio impedit atque. Dignissimos distinctio a possimus quam beatae repudiandae tempora eius assumenda esse deleniti? Dicta doloremque ipsa doloribus beatae nemo atque officia alias vero. Nemo ab delectus nesciunt molestias assumenda! Doloremque in aspernatur harum accusamus assumenda, illum vero magni voluptate repellendus corrupti nemo voluptatibus explicabo perspiciatis soluta perferendis quibusdam consectetur ipsa est, esse optio repudiandae? Laboriosam, delectus ex. Hic quidem error porro perspiciatis possimus molestias provident dignissimos qui sit, ratione dolore est recusandae harum dolorem, natus et vitae suscipit dolorum nihil aliquid quos iusto consequatur! Delectus at qui quia sint.
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
        <div className="row public-conversations-section">
            <div className="col">
                <h3 className="conversations-list-header">Financial</h3>
                <ConversationsList
                    conversations={conversationsByCategory.get('financial') || []}
                    expertise="Financial"
                    onConversationClick={handleConversationClick}
                />
            </div>
            <div className="col">
                <h3 className="conversations-list-header">Personal</h3>
                <ConversationsList
                    conversations={conversationsByCategory.get('personal') || []}
                    expertise="Personal"
                    onConversationClick={handleConversationClick}
                />
            </div>
            <div className="col">
                <h3 className="conversations-list-header">Career</h3>
                <ConversationsList
                    conversations={conversationsByCategory.get('career') || []}
                    expertise="Career"
                    onConversationClick={handleConversationClick}
                />
            </div>
        </div>
        <Outlet />
    </div>
);
};

export default Home;
