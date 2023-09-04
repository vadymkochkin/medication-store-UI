import Button, { ButtonType } from "../Button";
import FileUpload from "../FileUpload";
import LocalAPIClient from "@/utils/localApi";
import { useEffect, useState } from "react";

const Case = () => {
  const [questions, setQuestions]: any = useState([]);
  const [cases, setCases]: any = useState({});

  const getData = async () => {
    const _questions = await LocalAPIClient.get('/api/case/questions');
    setQuestions(_questions);
    const _cases = await LocalAPIClient.get('/api/case/case');
    setCases(_cases);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-1 w-full flex-col lg:flex-row">
      <div className="flex flex-1 flex-col">
        <h1 className="text-2xl font-weight-bold mb-8">Submitted Answers</h1>
        <div className="relative overflow-x-auto sm:rounded-lg w-full bg-[#eef3f5] min-h-[32rem]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 case-table">
            <thead className="text-xs text-gray-700 uppercase bg-[#eef3f5] dark:bg-gray-700 dark:text-gray-400 border-b-4 border-[#008837]">
              <tr>
                <th scope="col" className="px-6 py-3 pt-8">
                  Questions
                </th>
                <th scope="col" className="px-6 py-3 pt-8">
                  <div className="flex items-center">
                    Answers
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cases.case_answers ?? {}).map((item, key) => (
                <tr className={`border-b dark:bg-gray-800 dark:border-gray-700 ${key % 2 === 1 ? 'bg-[#dfe8ec]' : ''}`} key={'question_' + key}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.replace(/_/g, ' ')}
                  </th>
                  <td className="px-6 py-4">
                    {cases.case_answers[item]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col mt-8 lg:mt-0 lg:ml-4 md:w-72">
        <h1 className="text-2xl font-weight-bold mb-8">Submit Files for Physician Review</h1>
        <div className="shadow-lg flex flex-col items-center p-8 rounded-2xl border-2 border-[#eef3f5]">
          <FileUpload onChange={() => {}} />
          <Button title="Browser.." type={ButtonType.redOutline} />
        </div>
      </div>
    </div>
  )
};

export default Case;