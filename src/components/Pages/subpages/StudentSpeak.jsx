import React from "react";
import ImageUi from "./ImageUi";

const StudentSpeakComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        STUDENT SPEAK GALLERY
      </h1>
      <div className="w-full h-full">
        <ImageUi />
      </div>
    </div>
  );
};

export default StudentSpeakComponent;
