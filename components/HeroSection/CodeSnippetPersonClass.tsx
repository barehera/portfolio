import React from "react";

const CodeSnippetPersonClass = () => {
  return (
    <div className="flex flex-col  items-start w-full justify-start bg-white bg-opacity-10  px-12 py-6 rounded-2xl ">
      <div className="flex gap-1 ">
        <p>1</p>
        <p>class</p>
        <p className="font-bold">Person</p>
        <p>{`{`}</p>
      </div>
      <div className="flex gap-1 ">
        <p>2</p>
        <p className="px-[10px]"></p>
        <p>constructor( )</p>
        <p>{`{`}</p>
      </div>
      <div className="flex gap-1 ">
        <p>3</p>
        <p className="px-[20px]"></p>
        <p>this.name</p>
        <p>{`=`}</p>
        <p className="font-bold">"Çağan Büyükavcılar"</p>
      </div>
      <div className="flex gap-1">
        <p>4</p>
        <p className="px-[20px]"></p>
        <p>this.trait</p>
        <p>{`=`}</p>
        <p className="font-bold">"Development"</p>
      </div>
      <div className="flex gap-1 ">
        <p>5</p>
        <p className="px-[10px]"></p>
        <p>{`}`}</p>
      </div>
      <div className="flex gap-1 ">
        <p>6</p>
        <p className="pl-1">{`}`}</p>
      </div>
    </div>
  );
};

export default CodeSnippetPersonClass;
