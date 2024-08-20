interface userIdParamsProps {
    params:{
      UserId:string,
    };
};
const page = ({ params, }: userIdParamsProps) => {
  const temp:string="1233"
  return (
    <div >
      User Id : {params.UserId}
    </div>
  );
};
 export default page;
 