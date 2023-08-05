import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import cyber from "../assets/cybertruck.jpg"
import ImageBackgroungNoText from "../components/imageBackgroundNoText/ImageBackgroungNoText";
import teslaCharger from "../assets/tesla-charger.jpg"
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
    {title:"Range",description:"500+"},
    {title:"0-60 mph",description:"2.9 s"},
    {title:"Peak Power",description:"1,000 hp"},
    
]
const text1 = "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
const text2 = "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."

export default function CybertruckPage(){
    return(
       <div className="container">
        <section className="section">
            <ImageBackgroundSection
                backgroundImage={cyber}
                header="Cybertruck"
                description="View Inventory and Custom Order"
                featureItems={featureItems}
            />
        </section>
        <section className="section">
          <ImageBackgroungNoText   backgroundImage={teslaCharger}/>
        </section>
        <section className="section">
          <ImageGrid image1={cyber} image2={teslaCharger} text1={text1} text2={text2}/>
        </section>

       </div>
    )
}