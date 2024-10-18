function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    const [month, day, year] = userDate.split('/')
    const formattedDate = `${year}${month.padStart(2,'0')}${day.padStart(2,'0')}`
        
    return formattedDate
  }
  
  console.log(formatDate("12/31/2014"));