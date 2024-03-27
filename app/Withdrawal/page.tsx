import React from "react";
import { Session } from "next-auth";
import DeleteUser from "../login/DeleteUser";
import Link from "next/link";

const DeletePage = () => {
  return (
    <>
      <div className="flex justify-center items-center my-[3rem]">
        <DeleteUser />
      </div>
    </>
  );
};

export default DeletePage;
