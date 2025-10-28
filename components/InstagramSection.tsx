"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function InstagramSection() {
  const posts = [
    {
      image: "https://ext.same-assets.com/788506488/4010691325.jpeg",
      likes: "1",
    },
    {
      image: "https://ext.same-assets.com/788506488/1599152858.jpeg",
      likes: "482",
    },
    {
      image: "https://ext.same-assets.com/788506488/265023801.jpeg",
      likes: "1",
    },
    {
      image: "https://ext.same-assets.com/788506488/1005554087.jpeg",
      likes: "378",
    },
    {
      image: "https://ext.same-assets.com/788506488/2737451342.jpeg",
      likes: "405",
    },
    {
      image: "https://ext.same-assets.com/788506488/1430650952.jpeg",
      likes: "499",
    },
  ];

  return (
    <section id="ig" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Instagram Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="https://ext.same-assets.com/788506488/4230246374.jpeg"
              alt="Albania Hair Clinic Instagram"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Albania Hair Clinic - Trapianto Capelli in Albania
              </h3>
              <p className="text-gray-600 text-sm">@albaniahairclinic</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div>
                <span className="font-bold text-gray-900">982</span>
                <span className="text-gray-600 text-sm ml-1">Posts</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">17.5K</span>
                <span className="text-gray-600 text-sm ml-1">Followers</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">0</span>
                <span className="text-gray-600 text-sm ml-1">Following</span>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Follow
            </Button>
          </div>
        </AnimatedSection>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {posts.map((post, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 50}
            >
              <div className="relative aspect-square group cursor-pointer">
                <Image
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
