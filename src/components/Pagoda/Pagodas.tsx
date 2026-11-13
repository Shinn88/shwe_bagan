import "./Pagodas.css";
import { useEffect } from "react";
import ananda from "./images/Ananda.png";
import dham from "./images/Dhammayangyi.png";
import shwesan from "./images/shwesandaw.png";
import thatbyin from "./images/Thatbyinnyu.png";
import gawdaw from "./images/Gawdawpalin.png";
import sula from "./images/Sulamani.png";
import htilo from "./images/htilominlo.png";
import shwezi from "./images/Shwezigon.png";
import manuha from "./images/manuha.png";
import bu from "./images/bupaya.png";
import shwegu from "./images/shwegugyi.png";
import pya from "./images/Pyathada.png";


type Pagoda = {
  name: string;
  built: string;
  paragraphs: string[];
  image: string;
  alt: string;
};

const pagodas: Pagoda[] = [
  {
    name: "Ananda Temple",
    built: "Built 1105 AD",
    paragraphs: [
      "Ananda Temple is one of Bagan’s best-known monuments and an outstanding example of the architectural ambition of the kingdom during the early twelfth century. It is traditionally dated to 1105 and associated with King Kyanzittha. Its plan is arranged around a central sanctuary, with four entrances oriented toward the cardinal directions. The building combines a broad, cross-shaped ground plan with a tall superstructure, creating a distinctive silhouette above the surrounding plain. Its carefully balanced proportions, brick construction, plaster decoration and use of light make it feel different from the more massive, fortress-like appearance of some later temples.",
      "Inside, four large standing Buddha images face north, south, east and west. They are traditionally identified as Kakusandha, Konagamana, Kassapa and Gautama, representing Buddhas of the present world cycle; some local descriptions also associate the four images with different names and traditions. Visitors should take time to notice how the interior changes as daylight enters through the doorways and illuminates the shrine spaces. The temple’s galleries, corridors and devotional areas were designed for movement and worship, not simply for viewing the building from outside. The monument therefore demonstrates how architecture, sculpture and religious practice were planned together.",
      "A well-known legend says that King Kyanzittha was inspired by descriptions of the Nandamula Cave monastery in the Himalayas and commissioned a building that would recall it. The story belongs to Bagan’s religious tradition and should be understood as a legend rather than a verified construction record. Ananda also reflects the wider cultural connections of medieval Myanmar: Bagan’s artists adapted ideas that circulated through South and Southeast Asia and made them part of a distinct local architectural language. Today, Ananda remains a living religious site within the UNESCO-listed Bagan cultural landscape. Visitors should dress respectfully, remove footwear where required, avoid touching fragile surfaces and remember that worshippers may be using the temple while sightseeing continues.",
    ],
    image: ananda,
    alt: "Ananda Temple",
  },
  {
    name: "Dhammayangyi Temple",
    built: "Built around 1167–1170 AD",
    paragraphs: [
      "Dhammayangyi is widely described as the largest temple in Bagan by mass. Its broad, stepped profile and extensive brickwork make it one of the most imposing monuments on the plain. It is generally associated with King Narathu and dated to the later twelfth century, often around 1167–1170. Unlike temples whose silhouettes rise into slender towers, Dhammayangyi emphasizes a heavy pyramidal form. The repeated courses of brick and the carefully arranged terraces create a powerful sense of scale, while the building’s corridors and enclosed spaces reveal the complexity of its interior plan.",
      "The temple is often discussed for the quality and precision of its masonry. A popular story says Narathu demanded that bricks fit so tightly that even a needle could not pass between them, punishing workers whose work failed his standard. This tale is part of the temple’s legend and should not be treated as a documented account of construction practices. Historical stories about Narathu also portray him as a violent ruler, but details transmitted through chronicles and later retellings need to be distinguished from contemporary archaeological evidence. The building itself remains the strongest evidence of the resources, organization and skilled labour required to create a monument on this scale.",
      "Dhammayangyi’s unfinished or inaccessible inner portions have contributed to its mysterious reputation. Visitors may notice that some passages do not lead through the building in the way they might expect; the temple’s plan and sealed areas have been the subject of discussion, but explanations should not be presented as certain without reliable evidence. In the larger story of Bagan, the temple illustrates how royal patronage linked political authority with Buddhist merit-making and monumental construction. Bagan’s many religious buildings were not isolated attractions: together they formed a sacred landscape of temples, stupas, monasteries, inscriptions, sculptures and murals. When visiting, follow current access rules, do not climb restricted structures, and avoid touching or scraping the ancient brickwork.",
    ],
    image: dham ,
    alt: "Dhammayangyi Temple",
  },
  {
    name: "Shwesandaw Pagoda",
    built: "Built 1057 AD",
    paragraphs: [
      "Shwesandaw is a major stupa traditionally dated to 1057 and associated with King Anawrahta, an important ruler in the consolidation of the Bagan kingdom. Its name is commonly translated as “Golden Holy Hair” and is connected with a tradition that a hair relic of the Buddha was enshrined there. Such relic traditions are central to Buddhist pilgrimage: a stupa does not need to contain a visible image of the Buddha to function as a focus for devotion. Its solid, upward-rising form directs attention toward the sacred centre and the finial at the top.",
      "The pagoda’s architectural profile is defined by a series of terraces supporting a bell-shaped stupa. In the wider history of Bagan, this kind of monument shows how builders developed local forms while drawing on older Buddhist stupa traditions found across South and Southeast Asia. Shwesandaw belongs to an early phase of Bagan’s monumental building activity, when rulers and religious donors sponsored sacred structures as acts of merit and as public expressions of devotion. Inscriptions and surviving monuments across the region help historians understand how religious donations, royal power and local communities were connected.",
      "Shwesandaw became especially famous in modern tourism for its elevated views over the temple plain and for sunset photography. However, access to ancient monuments and upper terraces can change for conservation and safety reasons; visitors should obey current restrictions and use officially permitted viewpoints rather than climb fragile structures. Bagan’s monuments have been affected by earthquakes and by inappropriate restoration in the past, making careful conservation especially important. The pagoda is best appreciated not only as a viewpoint but as part of a larger cultural landscape in which hundreds of sacred buildings remain connected to living Buddhist practice. Visitors should keep noise low, dress respectfully and avoid treating the site solely as a photo location.",
    ],
    image: shwesan,
    alt: "Shwesandaw Pagoda",
  },
  {
    name: "Thatbyinnyu Temple",
    built: "Built around 1144–1150 AD",
    paragraphs: [
      "Thatbyinnyu is commonly described as the tallest temple in Bagan, rising to approximately 61 metres. It is associated with King Sithu I and dates to the middle of the twelfth century. Its name is usually translated as “Omniscience,” referring to the Buddha’s complete knowledge. The building’s height and strong, stacked volumes make it a landmark visible from many parts of the archaeological zone. Its design differs from the lower, more compact forms of some earlier temples and reflects the experimentation that characterized Bagan architecture as builders developed increasingly ambitious multi-level structures.",
      "The temple has a two-storey appearance, with a large lower mass supporting an upper level and a tower-like superstructure. Projecting porches and recessed openings break up the exterior walls, while the interior is organized around sacred spaces and corridors. Thatbyinnyu and other major temples of the period demonstrate that Bagan architecture was not a single fixed style. Builders adjusted proportions, lighting, circulation and decorative treatments from monument to monument. These choices shaped how worshippers approached the shrine and how the structure appeared within the wider landscape.",
      "Thatbyinnyu is also important for understanding the cultural landscape recognized by UNESCO. Bagan was a royal capital and a centre of Buddhist learning, patronage and pilgrimage between the eleventh and thirteenth centuries. Thousands of religious structures were created across the plain, and their inscriptions, murals and sculptures preserve evidence of the people and institutions that supported them. Today, the temple should be viewed as both an architectural achievement and a sacred place. Some areas of ancient monuments may be closed for conservation, and visitors should not climb walls or enter restricted spaces. Taking time to observe the exterior from a respectful distance can reveal the building’s vertical rhythm, its layered massing and the way it dominates the surrounding terrain.",
    ],
    image: thatbyin,
    alt: "Thatbyinnyu Temple",
  },
  {
    name: "Gawdawpalin Temple",
    built: "Built in the 12th–13th century",
    paragraphs: [
      "Gawdawpalin is one of Bagan’s large late-period temples and is often ranked among the tallest monuments of the archaeological zone. Construction is associated with King Sithu II, also known as Narapatisithu, and the temple was completed during the reign of his successor in the early thirteenth century. Its name is commonly interpreted in relation to paying homage or showing reverence. Like other major hollow temples of Bagan, it combines a substantial square plan with projecting entrances and a superstructure that rises above the central mass.",
      "The interior is organized around a central block with corridors and Buddha images. Architectural descriptions note images in different parts of the building and a plan that creates a sequence of enclosed and open spaces as visitors move through it. The temple is related in style to other late Bagan monuments, including Sulamani and Htilominlo, but it has its own proportions and details. Its scale illustrates the continued investment in religious architecture during the later Bagan period, when royal and elite patronage supported major projects even as the kingdom’s political circumstances changed.",
      "Gawdawpalin suffered serious damage during the 1975 earthquake and was subsequently repaired. The earthquake is an important reminder that Bagan’s monuments are vulnerable to natural hazards and that restoration can affect how ancient structures appear today. A local story connects the name with a king seeking forgiveness after losing his sight, while other versions explain it through different traditions; these accounts are part of local heritage and should be identified as legends rather than certain historical explanations. When visiting, look at the overall massing, the projecting porches and the way the structure rises above its platform. Respect worshippers and conservation barriers, and remember that the temple forms part of a UNESCO World Heritage cultural landscape rather than standing alone.",
    ],
    image: gawdaw,
    alt: "Gawdawpalin Temple",
  },
  {
    name: "Sulamani Temple",
    built: "Built 1183 AD",
    paragraphs: [
      "Sulamani Temple was built in 1183 under King Narapatisithu and is regarded as one of the finest examples of Bagan’s later temple architecture. Its name is often translated as “Crowning Jewel.” The temple stands in the Minnanthu area and is admired for the balance between its substantial brick mass and its carefully arranged details. In comparison with earlier monuments, Sulamani reflects a mature architectural language: the structure is monumental, but its windows, terraces, entrances and decorative surfaces create visual rhythm rather than an uninterrupted wall of brick.",
      "The temple’s design is often compared with Thatbyinnyu and Dhammayangyi, and it influenced later buildings such as Htilominlo. Sulamani uses brick and stone, with arched openings and decorative work that once included rich plaster details. Interior paintings and mural fragments are especially important because they show that Bagan temples were not originally plain, empty brick spaces. They were decorated environments in which painting, sculpture, architecture and religious practice worked together. Surviving art is vulnerable to moisture, visitor contact, dust and changes in the building’s condition, so preservation requires careful control of access and environment.",
      "Sulamani was damaged by the 1975 earthquake and underwent restoration, including later rebuilding work. Its present condition therefore reflects both the medieval monument and modern conservation history. When looking at the temple, notice the repeated tiers, the relationship between the central sanctuary and the outer walls, and the way arched windows create depth in the brickwork. Sulamani also helps tell the larger story of Bagan as a centre of Buddhist devotion and royal merit-making from the eleventh through thirteenth centuries. Visitors should follow site rules, avoid touching murals or carved surfaces, and remember that even apparently sturdy brickwork is part of a fragile archaeological record.",
    ],
    image: sula,
    alt: "Sulamani Temple",
  },
  {
    name: "Htilominlo Temple",
    built: "Built around 1211–1231 AD",
    paragraphs: [
      "Htilominlo Temple was built during the reign of King Htilominlo, also known as Nandaungmya, in the early thirteenth century. The name is linked to a traditional story about a royal umbrella choosing the prince who would become king. According to the legend, the umbrella tilted toward the destined heir when several princes stood around it; the temple commemorated the place and the event. This is a well-known origin story, but it is a legend rather than a verifiable account of the succession. Such stories remain part of how communities remember the relationship between kingship, sacred signs and monumental building.",
      "The temple is a large brick structure with a square plan, multiple levels and a prominent upper mass. It is known for surviving fragments of plaster decoration and glazed terracotta or sandstone elements. Four Buddha images face the cardinal directions, connecting the building’s layout with a common Buddhist spatial idea: the sacred presence of the Buddha is oriented toward the world in every direction. Decorative details around the entrances and terraces reward close observation, although visitors should never touch or scrape them. The monument illustrates how Bagan’s builders combined structural engineering with ornament to create an imposing religious environment.",
      "Htilominlo belongs to the later phase of Bagan’s major building programme. By this period, temple design had developed a range of recognizable forms, and builders adapted earlier ideas into larger, more elaborate structures. The building was damaged by the 1975 earthquake and subsequently repaired, so conservation history is part of its story. When visiting, take note of the scale of the brickwork, the repeated openings and the way decorative elements soften the building’s heavy geometry. Bagan is a UNESCO World Heritage Site because its temples, stupas, inscriptions, murals and living religious practices together preserve an exceptional cultural landscape. Respectful behaviour and compliance with current access rules help protect that heritage for future generations.",
    ],
    image: htilo,
    alt: "Htilominlo Temple",
  },
  {
    name: "Shwezigon Pagoda",
    built: "Built in the late 11th century; completed under Kyansittha",
    paragraphs: [
      "Shwezigon Pagoda is one of the most revered Buddhist monuments in the Bagan region. Construction is traditionally associated with King Anawrahta and completion with his successor King Kyansittha, spanning the late eleventh and early twelfth centuries. The pagoda is known for its gilded bell-shaped dome rising above a series of terraces. This form became an influential model for later Burmese stupas. A stupa differs from a hollow temple: it is primarily a solid sacred monument associated with relics and devotion, rather than a building designed for people to enter and circulate through its interior.",
      "Shwezigon is connected with traditions concerning sacred relics of the Buddha, including a tooth relic. Relic traditions helped establish Buddhist pilgrimage sites across Asia, and the presence of a revered relic gave a monument religious significance beyond its architectural beauty. The surrounding compound includes smaller shrines and devotional features, creating a broader ritual environment rather than a single isolated structure. The pagoda’s gold surface catches changing daylight, but its importance is not limited to appearance; it continues to be a place where worshippers make offerings, pray and participate in religious customs.",
      "In the wider history of Bagan, Shwezigon represents the development of a distinctive Burmese stupa style during a period when Theravada Buddhism and royal patronage were becoming central features of the kingdom’s cultural life. Its influence can be seen in the general form of later pagodas in Myanmar, although each monument has its own history and details. Visitors should be mindful that Shwezigon is an active religious site. Dress modestly, remove footwear where signs require it, avoid disrupting prayer, and ask before photographing people engaged in worship. The surrounding architecture and devotional activity help explain why Bagan is understood as a living sacred landscape, not simply an archaeological park.",
    ],
    image: shwezi,
    alt: "Shwezigon Pagoda",
  },
  {
    name: "Manuha Temple",
    built: "Built in 1067 AD",
    paragraphs: [
      "Manuha Temple stands in the Myinkaba area near Bagan and is traditionally dated to 1067, associated with Manuha, the Mon king of Thaton. Historical accounts describe Manuha as having been brought to Bagan after the conquest of Thaton, although the wider story of Bagan’s expansion and the movement of religious texts and specialists is complex and debated by historians. The temple is notable because its history preserves memories of interaction between the Bagan kingdom and Mon culture. Inscriptions are particularly valuable to researchers because they provide evidence that can be compared with later chronicles and legends.",
      "The temple is famous for its large Buddha images placed within comparatively confined chambers. Three seated Buddhas occupy the main interior, and a large reclining Buddha is housed in a rear chamber. The scale of the images and the restricted spaces create a powerful visual impression. A popular interpretation says that the cramped chambers express Manuha’s sorrow or sense of confinement while he was held in Bagan. This is a meaningful local tradition, but it should be presented as an interpretation rather than a proven statement of the builder’s intention. The images can also be understood within Buddhist devotional practice, where large sacred figures provide a focus for offerings and reverence.",
      "Manuha Temple is important not only for its unusual interior but also for the stories it carries about power, captivity, religious patronage and cultural exchange. Bagan’s monuments were built by kings, elites, monks and other donors, and inscriptions sometimes recorded donations of land or goods that supported religious institutions. The temple remains part of an active sacred landscape. Visitors should move carefully through the interior, give worshippers space, and avoid touching the images or walls. Its close chambers, large sculptures and long history make it a place where architectural experience and historical memory are closely connected.",
    ],
    image: manuha,
    alt: "Manuha Temple",
  },
  {
    name: "Bupaya Pagoda",
    built: "Traditional early date; original structure rebuilt after 1975",
    paragraphs: [
      "Bupaya Pagoda stands on the bank of the Ayeyarwady River and is known for its distinctive rounded, gourd-like dome. Its name is commonly associated with the Burmese word for a gourd, reflecting the shape of the stupa. Some local traditions assign the monument a very early date and connect it with King Pyusawhti, but these early dating claims are uncertain and should be treated as tradition rather than established archaeological fact. Its riverside location makes Bupaya visually different from many temples scattered across the inland plain and links it to the river that helped sustain Bagan’s communities and transport networks.",
      "The original pagoda was destroyed when the riverbank collapsed during the 1975 earthquake, and the present structure was rebuilt afterward. This history makes Bupaya a useful example of the challenges faced by heritage conservation in a region exposed to earthquakes and river erosion. When discussing the site, it is important to distinguish the long-standing religious identity and traditional form from the age of the surviving physical structure. Reconstruction can preserve a monument’s place in community life, but it also changes the material evidence available to archaeologists and conservators.",
      "Bupaya is often visited for its views over the Ayeyarwady, particularly when the light changes near sunset. The river is a central feature of Myanmar’s history, carrying people, goods and ideas between regions. Bagan’s position along the river helped connect it to wider networks, while its religious buildings transformed the plain into a sacred landscape. At Bupaya, the combination of the rounded stupa, river setting and continuing devotional use gives visitors a different experience from the large hollow temples. Please follow barriers near the riverbank, use safe public viewing areas, and remember that the pagoda is a religious site as well as a scenic destination.",
    ],
    image: bu,
    alt: "Bupaya Pagoda",
  },
  {
    name: "Shwegugyi Temple",
    built: "Built 1131 AD",
    paragraphs: [
      "Shwegugyi Temple, whose name is often translated as “Great Golden Cave,” is associated with King Sithu I and is traditionally dated to 1131. It stands near the area of Bagan’s former royal palace, making its location significant in understanding the relationship between religious monuments and royal space. The temple rises from a high brick platform and is known for its arched windows, fine stucco work and carved wooden details. Its scale is more compact than some of Bagan’s largest monuments, but the elevated foundation and carefully proportioned superstructure give it a strong presence.",
      "Shwegugyi is often noted for its construction inscription and for accounts that describe its rapid building period. Inscriptions are crucial historical sources at Bagan because they can preserve dates, names, donations and details about the people who commissioned or supported religious buildings. These records offer evidence that complements traditional chronicles, which may contain later narrative layers. The temple’s architectural details also show that medieval Bagan buildings were decorated with more than brick: plaster, wood and other materials shaped their appearance, though many fragile elements have weathered or disappeared over time.",
      "The temple is connected in local historical narratives with the final days of King Sithu I, including accounts of his death at the hands of his son. Such stories are part of the wider royal history associated with Bagan, but individual details should be checked against reliable historical evidence. For visitors, Shwegugyi offers an opportunity to look closely at arched openings, the raised platform and the relationship between the temple and nearby archaeological remains. The monument is part of the UNESCO-listed Bagan cultural landscape, where surviving structures, inscriptions and living Buddhist traditions all contribute to its significance. Respect barriers and do not climb architectural features that are not open to visitors.",
    ],
    image: shwegu,
    alt: "Shwegugyi Temple",
  },
  {
    name: "Pyathada Temple",
    built: "Built in the 13th century AD",
    paragraphs: [
      "Pyathada Temple is a large, broad monument generally dated to the thirteenth century, the later phase of Bagan’s major building tradition. Its name is associated with the idea of a multi-tiered or elevated structure, and its broad terraces give it a different profile from the tall, tower-like temples nearby. The building is notable for its large upper platform and substantial brick construction. Some descriptions say the temple was never fully completed, though the exact building history should be treated cautiously unless supported by specific archaeological evidence.",
      "In recent decades, Pyathada became known to visitors as a place from which to look across the temple plain, especially in the late afternoon. However, access to ancient monuments has changed over time because of conservation and visitor-safety concerns. Climbing fragile structures can damage historic fabric and put people at risk, so visitors should use only viewpoints that are officially open. The temple’s broad platform also illustrates how Bagan builders experimented with mass, height and terraces, creating different spatial experiences across the archaeological zone.",
      "Pyathada should be understood as part of a wider landscape rather than only as a scenic stop. UNESCO describes Bagan as a sacred cultural landscape containing temples, stupas, monasteries, archaeological remains, inscriptions, murals and sculptures, supported by continuing Buddhist practices. The large number and variety of structures reveal centuries of religious patronage and technical skill. When visiting Pyathada, notice the relationship between its horizontal terraces and the more vertical monuments visible in the distance. Avoid climbing restricted areas, do not remove bricks or fragments, and leave the site as you found it. These simple practices help protect a fragile monument for future visitors and local communities.",
    ],
    image: pya,
    alt: "Pyathada Temple",
  },
];

export default function Pagodas() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="pagodas-page">
      <header className="pagodas-header">
        <h1>The 12 Famous Pagodas of Bagan</h1>
        <p>
          Journey through the ancient plains of Myanmar — where over 2,000
          sacred monuments rise from the earth.
        </p>
      </header>

      <section className="pagodas-intro">
        <h2>Bagan, the Land of a Thousand Temples</h2>
        <p>
          Between the 11th and 13th centuries, the Kingdom of Bagan built
          thousands of pagodas and temples across a 42-square-kilometre plain
          along the Irrawaddy River. Today around 2,200 monuments still stand —
          the densest concentration of Buddhist architecture in the world. Here
          are twelve of the most celebrated pagodas.
        </p>
      </section>

      <main className="pagodas-list">
        {pagodas.map((pagoda, index) => (
          <article className="pagoda-card" key={pagoda.name}>
            <h3>
              {index + 1}. {pagoda.name}
            </h3>
            <span className="pagoda-card__built">{pagoda.built}</span>
            <img
              className="pagoda-card__image"
              src={pagoda.image}
              alt={pagoda.alt}
              loading="lazy"
            />
            {pagoda.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </main>

      <footer className="pagodas-footer">
        <p>
          The 12 Famous Pagodas of Bagan © 2026 —{" "}
          <span>Land of a Thousand Temples</span>
        </p>
      </footer>
    </div>
  );
}
