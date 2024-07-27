import { useCallback, useEffect, useState } from "react";
import { ListItem, marketContractUtils } from "../utils/contract/contractUtils";
import { ItemCard } from "../components/ItemCard";

export function HomePage() {
  const [listings, setListings] = useState<ListItem[]>([]);
  const refreshListings = useCallback(() => {
    marketContractUtils.getAllListingNFTs().then(setListings);
  }, []);
  useEffect(() => {
    refreshListings();
  }, [refreshListings]);

  if (listings.length === 0) {
    return (
      <div className="px-4 flex items-center justify-start h-[calc(100dvh_-_48px)] md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="pb-6">
            <img src="/textLogo.png" width={150} className="mx-auto" />
          </div>
          <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            No listings now!
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 mt-4">
      <ul className="mb-10"></ul>
      <div className="flex flex-wrap gap-4">
        {listings.map((item, index) => (
          <ItemCard
            key={index}
            data={item}
            from="card list"
            refreshData={refreshListings}
          />
        ))}
      </div>
    </div>
  );
}
