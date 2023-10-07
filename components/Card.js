export default function Card({backgroundImage}){
    return (
        <div className="w-[280px] h-[160px] bg-green-500 mt-4 rounded-sm shadow-md bg-cover bg-center transition hover:scale-95"             
        style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}> </div>
    )
}