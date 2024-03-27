import { Session } from "next-auth";
import Image from "next/image";
import React from "react";

const Profile = async ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-[1.5rem] text-white font-semibold my-[1.5rem] pr-[10rem]">
            プロフィール
          </div>
          <div className="flex items-center space-x-[2.5rem] p-5 pb-[3rem]">
            <Image
              src={
                session.user && session.user.image
                  ? session.user.image
                  : "/images/default-icon.webp"
              }
              alt="profile"
              width={90}
              height={70}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="text-xl text-white font-semibold pb-[1rem]">
                {session.user && session.user.name}
              </div>
              <div className="text-gray-300">
                {session.user && session.user.email}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>ログインしてください</p>
        </div>
      )}
    </>
  );
};

export default Profile;
