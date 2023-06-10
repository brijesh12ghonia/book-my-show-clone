import React from "react"
import DefaultLayoutHoc from "../layout/Default.layout";
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilter/PlayFilter.Component";


const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Plays in Mumbai
            </h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00145294-apdhafwpkl-portrait.jpg" href="https://in.bookmyshow.com/events/jo-bolta-hai-wohi-hota-hai-feat-harsh-gujral/ET00145294" title="Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral" subtitle="Comedy | Hindi, English | 16yrs + | 1hr 40mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00145294-apdhafwpkl-portrait.jpg" href="https://in.bookmyshow.com/events/jo-bolta-hai-wohi-hota-hai-feat-harsh-gujral/ET00145294" title="Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral" subtitle="Comedy | Hindi, English | 16yrs + | 1hr 40mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00145294-apdhafwpkl-portrait.jpg" href="https://in.bookmyshow.com/events/jo-bolta-hai-wohi-hota-hai-feat-harsh-gujral/ET00145294" title="Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral" subtitle="Comedy | Hindi, English | 16yrs + | 1hr 40mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00145294-apdhafwpkl-portrait.jpg" href="https://in.bookmyshow.com/events/jo-bolta-hai-wohi-hota-hai-feat-harsh-gujral/ET00145294" title="Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral" subtitle="Comedy | Hindi, English | 16yrs + | 1hr 40mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357779-rudbpzazrj-portrait.jpg" href="https://in.bookmyshow.com/events/zakir-khan-live/ET00357779" title="Zakir Khan Live" subtitle="Comedy | Hindi | 16yrs + | 1hr 30mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357779-rudbpzazrj-portrait.jpg" href="https://in.bookmyshow.com/events/zakir-khan-live/ET00357779" title="Zakir Khan Live" subtitle="Comedy | Hindi | 16yrs + | 1hr 30mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357779-rudbpzazrj-portrait.jpg" href="https://in.bookmyshow.com/events/zakir-khan-live/ET00357779" title="Zakir Khan Live" subtitle="Comedy | Hindi | 16yrs + | 1hr 30mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357779-rudbpzazrj-portrait.jpg" href="https://in.bookmyshow.com/events/zakir-khan-live/ET00357779" title="Zakir Khan Live" subtitle="Comedy | Hindi | 16yrs + | 1hr 30mins" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361144-leapteatzg-portrait.jpg" href="https://in.bookmyshow.com/events/the-laughology-project-mumbai/ET00361144" title="The Laughology Project: Atul Khatri, Gaurav Kapoor" subtitle="Comedy | English, Hindi | 16yrs + | 2hrs" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361144-leapteatzg-portrait.jpg" href="https://in.bookmyshow.com/events/the-laughology-project-mumbai/ET00361144" title="The Laughology Project: Atul Khatri, Gaurav Kapoor" subtitle="Comedy | English, Hindi | 16yrs + | 2hrs" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361144-leapteatzg-portrait.jpg" href="https://in.bookmyshow.com/events/the-laughology-project-mumbai/ET00361144" title="The Laughology Project: Atul Khatri, Gaurav Kapoor" subtitle="Comedy | English, Hindi | 16yrs + | 2hrs" />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster isPlay={true} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361144-leapteatzg-portrait.jpg" href="https://in.bookmyshow.com/events/the-laughology-project-mumbai/ET00361144" title="The Laughology Project: Atul Khatri, Gaurav Kapoor" subtitle="Comedy | English, Hindi | 16yrs + | 2hrs" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Filters
            </h2>
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded">
                <PlayFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} /> 
              </div>
              <div className="bg-white rounded">
                <PlayFilter title="Languages" tags={["English", "Hindi", "Marathi", "Urdu", "Punjabi", "Tamil", "Telugu", "Bengali", "French", "Gujarati", "Italian", "Kannada"]} /> 
              </div>
              <div className="bg-white rounded">
                <PlayFilter title="Categories" tags={["Comedy Shows", "Workshops", "Music Shows"]} /> 
              </div>
              <div className="bg-white rounded">
                <PlayFilter title="More Filters" tags={["Outdoor Events", "Online Streaming", "Fast Filing"]} /> 
              </div>
              <div className="bg-white rounded">
                <PlayFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default DefaultLayoutHoc(PlayPage);