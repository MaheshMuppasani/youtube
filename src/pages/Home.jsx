import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider';
import file from '../constants/Sample_Excel_Sheet.xlsx';

const Home = () => {
    // const base64 = ''
    // const pdfContentType = 'application/pdf';

    // const base64toBlob = (data) => {

    //     const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);

    //     const bytes = atob(base64WithoutPrefix);
    //     let length = bytes.length;
    //     let out = new Uint8Array(length);

    //     while (length--) {
    //         out[length] = bytes.charCodeAt(length);
    //     }

    //     return new Blob([out], { type: pdfContentType });
    // };

    // const url = URL.createObjectURL(base64toBlob(base64));

    

    // const openPDF = () => {
    //     window.open(url,'_blank')
    // }

    const sampleExcelAsBlobUrl = () =>{
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
          }
          var blob = new Blob([s2ab(atob(file))], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,'
        });
        
        let href = URL.createObjectURL(blob);
        return href;
    }

    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            {/* <button onClick={openPDF}>open</button> */}
            <a href={sampleExcelAsBlobUrl()}>click sample sheet</a>
        </div>
    )
}

export default Home
