import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function CardDetailPage({ params }: { params: { vid: string } }) {
    // const mockVenueRepo = new Map()
    // mockVenueRepo.set("001",{name: "The Bloom Pavillion", image: "/img/bloom.jpg"})
    // mockVenueRepo.set("002",{name: "Spark Space", image: "/img/sparkspace.jpg"})
    // mockVenueRepo.set("003",{name: "The Grand Table", image: "/img/grandtable.jpg"})

    const venueDetail = await getVenue(params.vid)

    return (
      <main className="text-center p-5">
        <h1 className="text-lg font-medium">{venueDetail.data.name}</h1>
        <div className="flex flex-row my-5">
            <Image src={venueDetail.data.picture} 
            alt='Venue picture'
            width={0} height={0} sizes="100vw"
            className='rounded-lg w-[30%] bg-black' />
            <div className="text-md mx-5">{venueDetail.data.name}
              <div>Location : {venueDetail.data.address} {venueDetail.data.district} {venueDetail.data.province} {venueDetail.data.postalcode}</div>
              <div>Tel : {venueDetail.data.tel}</div>
              <div>Daily Rate : {venueDetail.data.dailyrate}</div>
            </div>
        </div>
      </main>
    );
  }
// export async function generateStaticParams() {
//     return [{vid:'001'},{vid:'002'},{vid:'003'}]
// }
  