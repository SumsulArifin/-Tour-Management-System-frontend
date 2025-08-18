import { AddDivisionModal } from "@/components/modules/Admin/Division/AddDivisionModal";
import { useGetTourTypesQuery, useRemoveTourTypeMutation } from "@/redux/features/Tour/tour.api";

export default function AddDivision() {
  useGetTourTypesQuery(undefined);
  const []=useRemoveTourTypeMutation();

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Division</h1>
        <AddDivisionModal />
      </div>
    
    </div>
  );
}