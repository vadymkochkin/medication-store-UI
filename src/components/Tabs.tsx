import { useState } from "react";

interface TabProps {
  name: string;
  url: string;
  id: string;
}

interface Props {
  tabs: TabProps[],
  onChangeActiveTab: (tabIndex: number) => void,
}

const Tabs = ({ tabs, onChangeActiveTab }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (clickIndex: number) => {
    setActiveTab(clickIndex);
    onChangeActiveTab && onChangeActiveTab(clickIndex);
  };

  return (
    <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-400">
      {tabs.map((tab: TabProps, key) => (
        <div onClick={() => handleTab(key)} key={'tab_' + key}>
          <a href={tab.url} id={tab.id} className={`inline-block p-4 text-gray-900 ${activeTab == key ? 'bg-[#00aeff] text-white' : 'bg-[#eaeaea] text-[#4d4d4d]'}`} aria-current="page">{tab.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Tabs;