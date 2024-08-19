interface userIdParamsProps {
    params:{
        userId:string,
    };
};
const page = ({ params, }: userIdParamsProps) => {
  const temp:string="1233"
  return (
    <div className="text-white bg-red-500 text-xs">
      User Id : {temp}{params.userId}
    </div>
  );
};
 export default page;
 