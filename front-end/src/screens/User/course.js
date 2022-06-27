import React, {useState} from "react";
import ReactPlayer from 'react-player/youtube'


import Course1 from "../../ui/course-1.png";
import Course2 from "../../ui/course-2.jpg";

function CoursePage(props){

    const [videoUrl, setVideo] = useState('');
    console.log(videoUrl);

    const [course, setCourse] = useState(
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            about: "In this course i'll teach you how to make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future.<br />Hope you'll get some really usefull stuff out of this course. Good Luck to all!",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",            
            poster: Course1,

            videos: [
                {
                    ID: 1,
                    title: "Introduction",
                    duration: "03 min 24 secs",
                    videoUrl: "https://www.youtube.com/watch?v=4vjExcnbyiw"                   
                },
                {
                    ID: 2,
                    title: "Getting Started",
                    duration: "09 min 55 secs",
                    videoUrl: "https://www.youtube.com/watch?v=z9CCL-qinM4"  
                },
                {
                    ID: 3,
                    title: "The Illustration",
                    duration: "62 mins 48 secs",
                    videoUrl: "https://www.youtube.com/watch?v=QH2-TGUlwu4"
    
                }
            ]
        }
    );
    
    const courseID = props.match.params.courseid;

    var courseVideos = [];
    for(let i = 0; i < course.videos.length; i++){
        courseVideos.push(
            <a
            style={{"cursor": "pointer"}}
            onClick={()=>setVideo(course.videos[i].videoUrl)}
            key={"course-video-" + i} className="noul aic rel flex">
                <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
                </div>
            </a>            
        );
    }

    
    return (
        <div className="course-page rel flex">


            <div className="course-info rel">

                <div className="tutor rel aic flex">
                    <div className="pic">
                        <img src={course.tutor.dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
                        <h2 className="s13 uname fontn c777">Course Tutor</h2>
                    </div>
                </div>

                <div className="course-meta">
                    <h2 className="s24 title fontb c333">{course.title}</h2>
                    <p className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: course.about}} />

                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Course <span  className="fontn">Achievements</span></h2>
                        <div className="course-stats aic flex">
                            <div className="stats-box flex">
                                <div className="ico ico-points s24 icon-shield" />
                                <h2 className="val s15 c333 fontb">1800</h2>
                                <h2 className="lbl s13 c777">points</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery s24 icon-battery-90" />
                                <h2 className="val s15 c333 fontb">45.3%</h2>
                                <h2 className="lbl s13 c777">complete</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery s24 icon-battery-90" />
                                <h2 className="val s15 c333 fontb">+26</h2>
                                <h2 className="lbl s13 c777">level</h2>
                            </div>
                        </div>
                    </div>

                    <div className="section section-b rel">                    
                        <h2 className="title s24 fontb">Course <span  className="fontn">Details</span></h2>
                        <div className="course-videos aic flex">
                            {courseVideos}
                        </div>
                    </div>

                </div>

            </div>

            <div className="course-preview rel">

                <div className="player rel">
                <ReactPlayer
              controls={true}
              pip={true}
              className="player"
              width="100%"
              height="100%"
              playing={false}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    fs: 0,
                  },
                },
              }}
             url={videoUrl ? videoUrl :"https://www.youtube.com/watch?v=cpP-fCo8Dn4"} />
                </div>

                <div className="extras-block rel flex">

                    <div className="chat rel">
                        <div className="section section-b rel">                    
                            <h2 className="title s24 fontb">Quick <span  className="fontn">Chat</span></h2>
                            <div className="messages aic flex">
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>                                    
                                </div>
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">Love this course...</h2>                                    
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Hey</h2>                                    
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Dope Intro, thanks!@</h2>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="now-watching rel">
                        <div className="tooltip abs s13 fontb cfff">86 Live Now</div>
                        <div className="section section-b rel">                    
                            <h2 className="title s24 fontb">Now <span  className="fontn">Watching</span></h2>
                            <div className="you-list rel">
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-1" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Grey Montgommery</h2>
                                        <h2 className="s13 uname fontn c777">@gregdomm</h2>
                                    </div>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-2" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                                        <h2 className="s13 uname fontn c777">@leilaearns</h2>
                                    </div>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-3" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                                        <h2 className="s13 uname fontn c777">@leilaearns</h2>
                                    </div>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-4" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                                        <h2 className="s13 uname fontn c777">@leilaearns</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CoursePage;