import Image from "next/image"
import loading from '../../img/loading.svg'

export default function Loading() {
  return (
    <> 
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        gridArea: 'section',
        height : '100%',
        width: '100%'
      }}
      >
        <Image src={loading} alt={"Loading"}>
      </Image>
      </div>

    </>
  )
}