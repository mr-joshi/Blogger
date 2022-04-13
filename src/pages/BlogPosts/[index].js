import { useRouter } from "next/router";

export default function BlogPosts() {
  const router = useRouter();
 
  return <div>blog id { router.query.index}</div>;
}
