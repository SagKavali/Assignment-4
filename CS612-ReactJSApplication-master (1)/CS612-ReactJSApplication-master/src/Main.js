import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
       <p>Date:11/25/2021</p>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Sankrati</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/kitesss.jpg' } alt="Indian Festivals"  />
     <p>It is celebrated in January every year and marks the termination of the Winter season and the beginning of a new harvest season. This year it will be celebrated on 14 January. It is dedicated to Lord Sun. It also refers to a specific solar day in the Hindu calendar.
It is dedicated to Lord Sun. It also refers to a specific solar day in the Hindu calendar. On this auspicious day, the sun enters the zodiac sign of Capricorn or Makar which marks the end of winter months and the beginning of longer days. This is the beginning of the month of Magh. 
Sankranti is deemed a Deity. As per the legend, Sankranti killed a devil named Sankarasur. The day next to Makar Sankrant is called Karidin or Kinkrant. On this day, Devi slew the devil Kinkarasur. The information of Makar Sankranti is available in Panchang. The Panchang is the Hindu Almanac that provides information on the age, form, clothing, direction, and movement of Sankranti.
According to the DrikPanchaang, "The time between Makar Sankranti and 40 Ghatis (roughly 16 hours for Indian locations if we consider 1 Ghati duration as 24 minutes) from the time of Makar Sankranti is considered good for auspicious work. This duration of forty Ghatis is known as Punya Kaal. Sankranti activities, like taking bath, offering Naivedhya (food offered to deity) to Lord Surya, offering charity or Dakshina, performing Shraddha rituals, and breaking fast or Parana, should be done during Punya Kaal. If Makar Sankranti happens after Sunset then all Punya Kaal activities are postponed till the next Sunrise. Therefore, all Punya Kaal activities should be done in the day time."
     </p>
     </li>

     <li>
     <Link className="title" exact to="/Blog2">Holi</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/holi0.gif' } alt="Indian Festivals"  />
     <p> Holi celebrates the arrival of spring, the end of winter, the blossoming of love and for many, it is a festive day to meet others, play and laugh, forget and forgive, and repair broken relationships. The festival also celebrates the beginning of a good spring harvest season.
Holi is a major festival in the Hindu religion. It is celebrated on the day after the last full moon of the Hindu month of Phalguna. Phalguna falls between late February and early March in Western calendars. Holi usually marks the happy transition from harsh, dark winter to brighter, warmer springtime.
People will gather in one big group on the streets, parks and fields and share the experience of a rainbow of colours – by the end everyone involved will be covered in a spectrum of coloured powder. Groups of people will sing and dance, while playing the dhol drums in some regions – this year the kids had a water fight with balloons and water guns afterwards! It is a really fun time!

The festival celebrates many different cultural rituals and legends, including the legend of Prahlad. Prahlad was a young follower of Vishnu who despite being carried into fire by the demoness Holika managed a miraculous escape – good triumphed over evil – one of the common themes repeated in the rituals related to holi. In fact, there are many legends that are directly linked to Holi, and the reasons for celebration have evolved over time. It is thought that the festival may have existed several centuries before Christ, and although it started out bearing Holika’s name, it is now often simply known as ‘The Festival of Colours’. For some it is the festival of love – remembering Lord Krishna’s and Radha’s love.</p>
     </li>
     
     <li>
     <Link className="title" exact to="/Blog3">Diwali</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/Diyya.jpg' } alt="Diwali"  />
     <p>Diwali is a major Hindu festival popularly called the “festival of lights.” Generally, Diwali is often considered a celebration of the victory of light over darkness, good over evil, and knowledge over ignorance.
        This festival is as important to Hindus as the Christmas holiday is to Christians.
        Over the centuries, Diwali has become a national festival that's also enjoyed by non-Hindu communities. For instance, in Jainism, Diwali marks the nirvana, or spiritual awakening, of Lord Mahavira on October 15, 527 B.C.; in Sikhism, it honors the day that Guru Hargobind Ji, the Sixth Sikh Guru, was freed from imprisonment. 
        Buddhists in India celebrate Diwali as well.
        Observances of Diwali differ depending on region and tradition. Among Hindus the most widespread custom is the lighting of diyas (small earthenware lamps filled with oil) on the night of the new moon to invite the presence of Lakshmi, the goddess of wealth. In Bengal the goddess Kali is worshipped. The festival commemorates different specific things in different places and among different communities. It is often associated with the goddess Lakshmi or with Rama (an avatar of the god Vishnu). For some Hindus, Diwali marks the start of the New Year.
Diwali is a five-day festival, but its third day is typically observed as the main celebration.
        Some celebrate Diwali as a commemoration of the marriage of Lakshmi and Vishnu, while others observe it as the birthday of Lakshmi.
        During the festival, diyas are lit and placed in rows along the parapets of temples and houses and set adrift on rivers and streams. Homes are decorated, and floors inside and out are covered with rangoli, consisting of elaborate designs made of coloured rice, sand, or flower petals. The doors and windows of houses are kept open in the hope that Lakshmi will find her way inside and bless the residents with wealth and success.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;