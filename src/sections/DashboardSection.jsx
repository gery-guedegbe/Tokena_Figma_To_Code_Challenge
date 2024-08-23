import CryptoTable from "../components/CryptoTable";
import TrendingCrypto from "../components/TrendingCrypto";

const DashboardSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <TrendingCrypto />
      <CryptoTable />
    </div>
  );
};

export default DashboardSection;
