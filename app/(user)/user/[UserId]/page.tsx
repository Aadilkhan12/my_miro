interface userIdParamsProps {
    params:{
      UserId:string,
    };
};
const page = ({ params, }: userIdParamsProps) => {
  const temp:string="1233"
  return (
    <div className="text-white bg-red-500 text-xs">
      User Id : {params.UserId}
    </div>
  );
};
 export default page;
 