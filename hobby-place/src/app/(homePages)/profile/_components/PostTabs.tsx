import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "./PostCard";
import { useProfile } from "@/app/provider/ProfileProvider";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const PostTabs = () => {
  const { user } = useProfile();
  const router = useRouter();

  return (
    <Tabs defaultValue="Active" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Active">Active posts</TabsTrigger>
        <TabsTrigger value="False">Inactive posts</TabsTrigger>
        <TabsTrigger value="Liked">Liked</TabsTrigger>
      </TabsList>
      <TabsContent value="Active" className="w-full h-full">
        <div className="bg-white h-full flex flex-wrap gap-3 rounded-md overflow-scroll relative p-2 space-y-1.5">
          {user?.PetPost && user.PetPost.length > 0 ? (
            user.PetPost.map((post, index) =>
              post.active ? <PostCard key={index} post={post} /> : null
            )
          ) : (
            <div className="text-gray-600 text-center">No post yet</div>
          )}

          <Button
            className="rounded-full fixed z-100 bottom-23 right-8 cursor-pointer"
            onClick={() => router.push(`/petPost`)}
          >
            <Plus />
          </Button>
        </div>
      </TabsContent>
      <TabsContent
        value="False"
        className="bg-white h-full rounded-md overflow-hidden p-2 space-y-1.5"
      >
        {" "}
        {user?.PetPost && user.PetPost.length > 0 ? (
          user.PetPost.map((post, index) =>
            post.active ? null : <PostCard key={index} post={post} />
          )
        ) : (
          <div className="text-gray-600 text-center">No post yet</div>
        )}
      </TabsContent>
      <TabsContent value="Liked"></TabsContent>
    </Tabs>
  );
};
