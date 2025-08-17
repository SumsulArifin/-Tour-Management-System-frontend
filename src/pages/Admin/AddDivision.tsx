import { AddDivisionModal } from "@/components/modules/Admin/Division/AddDivisionModal";
import { useGetTourTypesQuery, useRemoveTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { toast } from "sonner";


export default function AddDivision() {
  const { data } = useGetTourTypesQuery(undefined);
  const [removeTourTyoe]=useRemoveTourTypeMutation();
  const handleRemoveTourTyoe=async(tourId:string)=>{
    const toastId=toast.loading("Removing...");
    try {
      const res=await removeTourTyoe(tourId).unwrap();
      
      if (res.success) {
        toast.success("Removed",{id:toastId})
        
      }
    } catch (error) {
      console.error(error);
      
    }
    
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Division</h1>
        <AddDivisionModal />
      </div>
    
    </div>
  );
}