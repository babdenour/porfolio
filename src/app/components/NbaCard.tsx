import Image from "next/image";
import kcard from "../../../public/2kcard.png"

function getAge(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function NbaCard() {
  return (
    <div className="flex flex-col">
      <h2 id="Basketball-heading" className="text-3xl font-bold tracking-tight sm:text-4xl p-6">
        Basket-ball infos
      </h2>
      <div className="w-full flex flex-wrap lg:flex-nowrap place-items-center justify-center lg:justify-between gap-6 px-6 h-[100%] overflow-auto scrollbar-thin scrollbar-track-gray-800/0 scrollbar-thumb-gray-900/0">
        <div className="w-1/4 relative ">
          <Image sizes="50vw" src={kcard} alt="abdenour bball tenu" width={500} className="rounded-3xl" />
        </div>
        <div className="w-full lg:w-3/4">

          <div className="flex flex-col gap-5">
            <div className="p-5 grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-4  rounded-lg text-sm">
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">
                  Offense
                </span>
                <span className="font-bold max-w-[75px] text-center">
                  <span className="inline-flex items-center justify-center text-sm w-7 h-6 bg-green-600 text-white text-shadow rounded font-bold">97</span>
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Defense</span>
                <span className="font-bold max-w-[75px] text-center">
                  <span className="inline-flex items-center justify-center text-sm w-7 h-6 bg-green-900 text-white text-shadow rounded font-bold">85</span>
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Position</span>
                <span className="font-bold max-w-[75px] text-center">PG/SG
                </span>
              </div>
              <div className="flex flex-col items-center gap-1"><span className="font-semibold text-gray-500">Height</span>
                <span className="font-bold max-w-[75px] text-center">6&quot;0&quot; (183cm)</span>
              </div>
              <div className="flex flex-col items-center gap-1"><span className="font-semibold text-gray-500">Wingspan</span>
                <span className="font-bold max-w-[75px] text-center">6&quot;2&quot; (187cm)</span>
              </div>
              <div className="flex flex-col items-center gap-1"><span className="font-semibold text-gray-500">Weight</span>
                <span className="font-bold max-w-[75px] text-center">160 lbs (73 kg)</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Nickname</span>
                <span className="font-bold max-w-[75px] text-center">Abde Bens</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">From</span>
                <span className="font-bold max-w-[75px] text-center">France</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Age</span>
                <span className="font-bold max-w-[75px] text-center">{getAge("1999/02/18")}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Team</span>
                <span className="font-bold max-w-[75px] text-center"><a href="https://chenebbc.ch/" target="_blank">Chene BBC</a></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Previous Team</span>
                <span className="font-bold max-w-[110px] text-center">D1 ES Dammarie (FR) <br /> 2022/2023</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Award</span>
                <span className="font-bold max-w-[115px] text-center">Regional & D1 Champion <br /> Le Mee (FR) 2016/2017</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Award</span>
                <span className="font-bold max-w-[115px] text-center">National UNSS Champion <br /> Gorilles (FR) 2015/2016</span>
              </div>
              <div className="flex flex-col items-center gap-1 sm:hidden">
              </div>
              <div className="flex flex-col items-center gap-1 sm:hidden">
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Ranking</span>
                <span className="font-bold max-w-[115px] text-center">
                  <a href='https://swiss.basketball/national-competitions/nl1/men/rankings' target="_blank">NL1 West <br />2023/24</a>
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Stats</span>
                <span className="font-bold max-w-[115px] text-center">
                  <a href='https://swiss.basketball/national-competitions/nl1/men/stats' target="_blank">NL1 West <br />2023/24</a>
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-gray-500">Live Match</span>
                <span className="font-bold max-w-[115px] text-center">
                  <a href='https://swiss.basketball/national-competitions/nl1/men/stats' target="_blank">NL1 West <br />2023/24</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 