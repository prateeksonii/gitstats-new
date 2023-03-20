import Image from "next/image";

interface GithubData {
  login: string;
  avatar_url?: string;
  html_url: string;
  name: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

interface UserPageParams {
  username: string;
}

const fetchData = async (username: string): Promise<GithubData> => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const json = await res.json();
  return json as GithubData;
};

export default async function UserPage({ params }: { params: UserPageParams }) {
  const json = await fetchData(params.username);

  return (
    <div>
      <h4>{json.login}</h4>
      <h1>{json.name}</h1>
      <Image
        src={json.avatar_url ?? "http://placekitten.com/g/200/300"}
        alt="User avatar"
        height={40}
        width={40}
      />
    </div>
  );
}
