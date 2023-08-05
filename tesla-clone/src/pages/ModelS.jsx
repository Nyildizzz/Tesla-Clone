
import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/model-s.jpg"
import ImageBackgroungNoText from "../components/imageBackgroundNoText/ImageBackgroungNoText";
import teslaCharger from "../assets/tesla-charger.jpg"
import ImageGrid from "../components/ImageGrid/ImageGrid";




const featureItems = [
    {title:"Range",description:"390 mi"},
    {title:"0-60 mph",description:"1.99 s"},
    {title:"Peak Power",description:"1,020 hp"},
]
const text1 = "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
const text2 = "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."

export default function ModelS(){
    return(
      <div className="container">
        <section className="section">
            <ImageBackgroundSection
                backgroundImage={modelS}
                header="MODEL S"
                description="View Inventory and Custom Order"
                featureItems={featureItems}
            />
        </section>
        <section className="section">
          <ImageBackgroungNoText   backgroundImage={teslaCharger}/>
        </section>
        <section className="section">
          <ImageGrid image1={modelS} image2={teslaCharger} text1={text1} text2={text2}/>
        </section>

       </div>
  )
}
