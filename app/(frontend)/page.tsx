import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="px-48 grid grid-cols-2 justify-center items-center mx-auto gap-10 my-20">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default page;
