import { useRouter } from "next/navigation";
import LamaLogo from "../../../public/assets/LamaLogo";
const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="md:flex items-center gap-2 hidden cursor-pointer">
      <div className="h-8">
        <LamaLogo />
      </div>
      <div className="text-2xl font-bold text-purple-700">LAMA</div>
    </div>
  );
};
export default Logo;
