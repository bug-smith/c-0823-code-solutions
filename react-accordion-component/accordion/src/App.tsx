import React, { useState } from 'react';
import './App.css';

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard ... for the World Wide Web',
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet ... of the World Wide Web',
  },
  {
    id: 3,
    title: 'Javascript',
    content:
      'Javascript, often abbreviated as JS, is ... and first-class functions',
  },
];

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

function App() {
  return <Accordion topics={topics} />;
}

const Accordion: React.FC<AccordionProps> = ({ topics }) => {
  const [activeTopicId, setActiveTopicId] = useState<number | null>(null);

  return (
    <div>
      {topics.map((topic) => (
        <AccordionItem
          key={topic.id}
          topic={topic}
          isActive={topic.id === activeTopicId}
          onHeaderClick={() => {
            if (activeTopicId === topic.id) {
              setActiveTopicId(null);
            } else {
              setActiveTopicId(topic.id);
            }
          }}
        />
      ))}
    </div>
  );
};

type AccordionItemProps = {
  topic: Topic;
  isActive: boolean;
  onHeaderClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  topic,
  isActive,
  onHeaderClick,
}) => {
  return (
    <div>
      <div className="border-2 border-black bg-[#DDDDDD] text-black">
        <h1 onClick={onHeaderClick}>{topic.title}</h1>
      </div>
      <div className="border border-black bg-white text-black">
        {isActive && <p>{topic.content}</p>}
      </div>
    </div>
  );
};

export default App;
