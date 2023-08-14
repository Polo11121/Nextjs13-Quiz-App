import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { User } from "next-auth";
import Image from "next/image";

interface UserAvatarProps {
  user: User;
}

export const UserAvatar = ({ user }: UserAvatarProps) => (
  <Avatar>
    {user.image ? (
      <div className="relative w-full h-full aspect-square">
        <Image
          fill
          src={user.image}
          alt="Profile image"
          referrerPolicy="no-referrer"
        />
      </div>
    ) : (
      <AvatarFallback className="sr-only">
        <span>{user.name}</span>
      </AvatarFallback>
    )}
  </Avatar>
);
