import React, { Component } from 'react';

class Blog2 extends Component {
  render() {
    return (
    
    <main>
    <h1><center>Holi</center></h1>
    <center><img className="blog" src={process.env.PUBLIC_URL + '/Holi.gif' } alt="Holi"  /></center>

    <p>It is celebrated in January every year and marks the termination of the Winter season and the beginning of a new harvest season. This year it will be celebrated on 14 January. It is dedicated to Lord Sun. It also refers to a specific solar day in the Hindu calendar.
It is dedicated to Lord Sun. It also refers to a specific solar day in the Hindu calendar. On this auspicious day, the sun enters the zodiac sign of Capricorn or Makar which marks the end of winter months and the beginning of longer days. This is the beginning of the month of Magh.
      
      </p>
    
    </main>
    );
  }
}

export default Blog2;