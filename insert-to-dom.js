const sidebar = String.raw`
<aside class="sidebar no-print">
  <div class="os-v2-container">
  
    <a class="sidebar__link sidebar__link--home" href="index.html">
      <svg class="os-v2-svg sidebar__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 48">
        <path class="s-plain" d="M66.21 18.326c6.386.824 6.763 4.935 6.772 7.428v13.649c-.563 4.867-3.649 6.296-6.763 6.628h-29.92c6.444-3.336 9.927-7.608 11.911-12.352h13.595c3.106-.138 2.755-4.405-.007-4.412H49.446c2.426-7.987-.96-21.887-12.706-26.823h31.5c7.181.686 6.388 10.998.001 11.559H56.593c-1.98.018-2.725 3.889 0 4.323z" fill="#818181" stroke="#000" stroke-width="1.058"/><path class="o-plain" d="M24.696 1.67A22.362 22.362 0 002.334 24.03a22.362 22.362 0 0022.362 22.363A22.362 22.362 0 0047.057 24.03 22.362 22.362 0 0024.696 1.669zm.168 18.589a3.618 3.618 0 013.617 3.617 3.618 3.618 0 01-3.617 3.618 3.618 3.618 0 01-3.618-3.618 3.618 3.618 0 013.618-3.617z" fill="#fe0000" stroke="#000" stroke-width="1.058" stroke-linecap="round"/>
      </svg>
      <div class="sidebar__link sidebar__link--home  ">
        Home
      </div>
    </a>
  </div> <!-- <div class="os-v2-container"> -->

  <a class="sidebar__link sidebar__link--about-me" href="about-me.html">
    <svg class="sidebar__svg sidebar__link--about-me-svg" version="1.1" viewBox="0 0 26.458 26.458" xmlns="http://www.w3.org/2000/svg">
    <g fill="#bc5fd3" stroke="#000">
      <path transform="scale(.26458)" d="m50.268 57.678a32.589 42.768 0 0 0-30.818 28.998l5.0156 4.0391 6.7852 3.0352 9.8223 3.2148 8.75 0.89258 10.355-1.25 10.715-3.3926 8.3926-5.5371 1.6426-1.5996a32.589 42.768 0 0 0-30.66-28.4z" stroke-width=".75591"/>
      <ellipse cx="13.3" cy="10.512" rx="5.3993" ry="5.2208" stroke-width=".2"/>
    </g>
    <g transform="translate(0 -270.54)">
      <circle cx="13.245" cy="283.82" r="12.548" fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-width=".86372"/>
    </g>
    </svg>

    <svg class="sidebar__svg sidebar__link--about-me-mustache version="1.1" viewBox="0 0 26.458 26.458" xmlns="http://www.w3.org/2000/svg">
     <g>
      <path transform="scale(.26458)" d="m50.268 57.678a32.589 42.768 0 0 0-30.818 28.998l5.0156 4.0391 6.7852 3.0352 9.8223 3.2148 8.75 0.89258 10.355-1.25 10.715-3.3926 8.3926-5.5371 1.6426-1.5996a32.589 42.768 0 0 0-30.66-28.4z" fill="#bc5fd3" stroke="#000" stroke-width=".75591"/>
      <ellipse cx="13.3" cy="10.512" rx="5.3993" ry="5.2208" fill="#bc5fd3" stroke="#000" stroke-width=".2"/>
      <g stroke-linecap="round">
       <path d="m10.156 8.2506c0.62738-0.61665 1.2058-0.59698 1.7707-0.4009" fill="none" stroke="#672320" stroke-linejoin="round" stroke-width=".465"/>
       <path d="m14.566 7.8163c0.75781-0.18525 1.1838 0.056155 1.5034 0.43431" fill="none" stroke="#672320" stroke-width=".465"/>
       <ellipse cx="11.314" cy="8.9113" rx=".48817" ry=".51689" fill="#28170b" stroke="#f2eeed" stroke-linejoin="round" stroke-width=".15802" style="paint-order:normal"/>
       <path d="m12.402 12.308c0.58249 0.79457 1.2054 1.0032 1.9135-0.02363" fill="none" stroke="#890021" stroke-width=".265"/>
       <ellipse cx="15.117" cy="8.9355" rx=".48817" ry=".51689" fill="#28170b" stroke="#f2eeed" stroke-linejoin="round" stroke-width=".15802" style="paint-order:normal"/>
       <path d="m13.383 11.02c-1.835-0.15663-1.5241 1.3952-2.0076 2.1987" fill="none" stroke="#671c1c" stroke-width=".39688"/>
       <path d="m13.383 11.02c1.6432-0.20957 1.4028 1.3654 1.9844 2.1616" fill="none" stroke="#671c1c" stroke-width=".39688"/>
      </g>
     </g>
     <g transform="translate(0 -270.54)">
      <circle cx="13.245" cy="283.82" r="12.548" fill-opacity="0" stroke="#000" stroke-linecap="round" stroke-width=".86372"/>
     </g>
    </svg>
    


    <div class="sidebar__link sidebar__link--home  ">
      About Me
    </div>
  </a>
  
  <a class="sidebar__link sidebar__link--animations" href="projects.html">
    <svg class="sidebar__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458"  >
      <g transform="translate(0 -270.542)"><circle r="12.548" cy="283.817" cx="13.245" stroke="#000" stroke-width=".864" stroke-linecap="round" fill="none"/><path class="star-big-upper-right" d="M15.38 281.58c2.176-1.054 1.979-3.528 2.77-5.543.697 2.267.792 4.638 2.77 5.543-2.459 1.781-1.998 3.311-2.77 5.543-.838-2.703-.285-4.14-2.77-5.543z" fill="#fc0" fill-opacity=".834" stroke="#000" stroke-width=".249"/><path class="star-big-lower" d="M13.69 285.324c-.446 1.821-.214 2.768-2.303 4.254 2.21 1.487 1.508 2.515 2.303 4.253.893-1.778.458-3.253 2.303-4.253-2.09-1.327-1.727-2.557-2.303-4.254z" fill="#ff0080" stroke="#000" stroke-width=".249"/><path class="star-small-lower-left" d="M6.95 287.107c.803-.388.73-1.3 1.021-2.043.258.835.293 1.71 1.022 2.043-.907.657-.737 1.221-1.022 2.044-.308-.996-.104-1.526-1.02-2.044z" fill="#f0f" fill-opacity=".451" stroke="#000" stroke-width=".249"/><path class="star-small-upper-right" d="M13.79 275.74c.803-.389.73-1.301 1.022-2.044.257.836.292 1.71 1.02 2.044-.905.656-.736 1.22-1.02 2.043-.31-.996-.105-1.526-1.022-2.043z" fill="#f0f" fill-opacity=".451" stroke="#000" stroke-width=".249"/><path class="star-small-lower-right" d="M18.103 288.952c.667-.323.607-1.082.85-1.7.213.695.242 1.422.85 1.7-.755.546-.614 1.016-.85 1.7-.258-.829-.088-1.27-.85-1.7z" fill="#ff0052" stroke="#000" stroke-width=".249"/><path class="star-small-upper-left" d="M5.189 280.293c-.192.712-.107 1.05-1.104 1.637 1.155.618.753.982 1.104 1.636.44-.693.258-1.282 1.104-1.636-1.002-.51-.828-.984-1.104-1.637z" fill="#fc0" fill-opacity=".834" stroke="#000" stroke-width=".249"/></g><path class="star-big-upper-left" d="M12.464 9.06c-1.539-1.184-1.642-2.847-2.147-4.376C9.95 6.54 9.423 8.214 8.17 9.06c1.597.966 1.481 2.89 2.147 4.376.702-1.462.48-3.141 2.147-4.376z" fill="#ff0052" stroke="#000" stroke-width=".249"/>
    </svg>
    <div class="sidebar__link sidebar__link--home  ">
      Projects
    </div>
  </a>	

  <a class="sidebar__link sidebar__link--contracting" href="construction.html">
    <svg class="sidebar__svg sidebar__link--drill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458"  ><g stroke="#000"><path class="sidebar__link--drill-button sidebar__link--drill-piece" d="M11.118 15.112l1.525-.584c-.508-.822-.347-1.282-.287-1.98l-1.936.742.698 1.822" fill="#500" stroke-width=".263" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M9.37 11.767l-1.269.827-.335 1.01c.76 2.169 1.301 4.491 1.716 6.902l1.168.599 1.013-.006 1.138-.514.778-1.263c-.741-1.047-1.852-1.097-2.313-3.416-.27-1.182-.348-2.423.133-3.647l-.936-.518z" fill="#a00" stroke-width=".528"/><rect class="sidebar__link--drill-piece" ry=".629" transform="scale(1 -1) rotate(20.969)" y="-14.265" x="10.637" height="1.257" width="7.774" fill="#c8b7b7" stroke-width=".398" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-bit sidebar__link--drill-piece" d="M16.735 8.841l.414-1.423M17.552 8.434l.414-1.423M18.334 8.134l.413-1.423M19.13 7.83l.414-1.424M19.898 7.535l.414-1.424M20.67 7.24l.413-1.424M21.4 7.075l.414-1.423M15.94 9.212l.414-1.424" fill="none" stroke-width=".263"/><rect class="sidebar__link--drill-piece" transform="rotate(-20.97)" ry="1.494" y="21.501" x=".737" height="3.854" width="7.22" fill="#cd87de" stroke-width=".556" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M9.573 14.79l1.385-.53" fill="none" stroke-width=".244" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M9.732 15.922l1.23-.471" fill="none" stroke-width=".273" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M10.637 17.713l1.219-.467M10.063 16.88l1.28-.49" fill="none" stroke-width=".263" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M10.474 19.962l.68 1.774 3.675-1.409" fill="none" stroke-width=".149" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M11.442 20.666l2.99-1.146M11.14 19.818l2.99-1.146" fill="none" stroke-width=".149" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M8.845 21.022l1.116-.428-.438-1.14" fill="maroon" stroke-width=".263" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M6.069 10.102a1.49 1.49 0 00-.86 1.93l.465 1.215a1.49 1.49 0 001.93.86l5.422-2.079c.268-.102.488-.273.65-.484a2.144 1.927-20.97 00.063-.021 2.144 1.927-20.97 001.349-1.412 1.357 1.194-20.97 00.127-.043 1.357 1.194-20.97 00.84-1.6 1.357 1.194-20.97 00-1.695-.63 1.357 1.194-20.97 00-.254.127 2.144 1.927-20.97 00-1.746-.041 2.144 1.927-20.97 00-.064.027 1.488 1.488 0 00-.805.073z" fill="#cd87de" stroke-width=".4281381" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M6.316 10.91l1.23-.471M6.625 11.715l1.23-.472M6.912 12.434l1.23-.471M7.242 13.219l1.23-.471" fill="none" stroke-width=".27281358000000006" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M12.296 7.95l1.372 3.58M14.106 7.965l.826 2.155" fill="none" stroke-width=".26385255"/><path class="sidebar__link--drill-piece" d="M13.513 8.015c-.06.054-.145.067-.216.101-.23.09-.462.178-.693.266l.118.308.953-.365c.045.012.049.08.001.09-.304.127-.614.24-.921.36l.123.322c.31-.115.616-.242.929-.35.04-.016.074.031.05.067-.087.046-.192.075-.286.115l-.66.253.115.3c.323-.121.642-.254.969-.364.044 0 .042.081-.004.085-.308.13-.622.241-.933.363l.112.292c.322-.12.641-.252.966-.364.04-.017.075.03.05.066-.086.046-.191.076-.285.115l-.699.268.127.33c.323-.12.64-.253.967-.362.055-.013.07.074.017.085-.313.132-.633.246-.949.37l.106.276.99-.38c.034.007.07.06.03.08-.325.138-.658.256-.987.385l.109.284.966-.37a1.74 1.74 0 00.26-.48c-.033.006-.047-.01-.055-.05L14.04 8.17a1.845 1.845 0 00-.521-.156h-.003zM12.533 8.197c.021.04.022.124.082.075l.734-.282a2.145 2.145 0 00-.852.113l.036.094zM13.683 11.197c.023.033.02.133.076.084.26-.119.502-.285.697-.495l-.812.31.039.101z" fill="maroon" stroke-width=".012" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M12.933 9.563l1.052-.403M12.766 9.19l1.052-.403M12.615 8.776l1.052-.403M13.412 10.716l1.051-.403M13.25 10.357l1.052-.403M13.096 9.936l1.052-.403M12.418 8.401l1.052-.403M13.61 11.058l1.053-.403" fill="none" stroke-width=".089" stroke-linecap="round"/><circle class="sidebar__link--drill-circle" r="12.548" cy="13.295" cx="13.361" fill="none" stroke-width=".864" stroke-linecap="round"/><path class="sidebar__link--broken-circle" d="M23.935 6.538c3.655 5.72 2.1 13.309-3.51 17.13h0c-5.729 3.9-13.535 2.419-17.436-3.31C-.91 14.63.57 6.825 6.3 2.924 11.428-.57 18.285.233 22.476 4.671l.12.13" fill="none" stroke="#000" stroke-width=".864"/>
    <path class="sidebar__link--shard-1" d="M23.263 5.995c.004.006.188-.422.181-.421-.006 0 .272.374.275.368a5.96 5.96 0 00-.456.053z" stroke-width=".031"/><path class="sidebar__link--shard-2" d="M23.195 5.608c-.003.005.354.056.352.052a4.606 4.606 0 00-.22.278 4.62 4.62 0 00-.132-.33z" stroke-width=".0234962"/><path class="sidebar__link--shard-3" d="M22.976 5.31c-.005.006.448.072.446.065a5.848 5.848 0 00-.28.354 5.865 5.865 0 00-.166-.419z" stroke-width=".029830319999999997"/><path class="sidebar__link--shard-4" d="M23.092 5.75c.003.007.256-.375.25-.375-.007 0 .197.41.2.403a5.865 5.865 0 00-.45-.027z" stroke-width=".029830319999999997"/><path class="sidebar__link--shard-5" d="M23.188 5.862c.003.006.256-.375.25-.376-.008 0 .197.41.2.404a5.865 5.865 0 00-.45-.028z" stroke-width=".029830319999999997"/><path class="sidebar__link--shard-6" d="M-25.464-21.094c.007 0-.198-.418-.201-.412-.004.005.46.037.457.031a5.96 5.96 0 00-.256.38z" transform="matrix(-.561 -.654 -.759 .65108 -7.108 2.943)" stroke-width=".031"/>
    <path class="sidebar__link--shard-7" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.50387 .26367 .19817 .45906 15.182 20.329)" stroke-width=".052"/>
    <path class="sidebar__link--shard-8" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.394 -.30292 -.37137 .43416 7.114 6.816)" stroke-width=".052"/>
    <path class="sidebar__link--shard-9" d="M23.095 6.11c.004.006.188-.422.18-.421-.006 0 .273.374.275.368a5.96 5.96 0 00-.455.053z" stroke-width=".031"/>
    <path class="sidebar__link--shard-10" d="M23.188 5.424c-.004.005.45.07.447.065a5.848 5.848 0 00-.28.353 5.865 5.865 0 00-.167-.418z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-11" d="M23.188 5.862c.003.006.256-.375.25-.376-.008 0 .197.41.2.404a5.865 5.865 0 00-.45-.028z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-12" d="M23.263 5.995c.006.004.003-.462-.003-.458-.006.003.399.233.399.226 0-.007-.402.229-.396.232z" stroke-width=".031"/>
    <path class="sidebar__link--shard-13" d="M23.092 5.75c-.001.007.44-.114.435-.119a5.848 5.848 0 00-.113.436 5.865 5.865 0 00-.322-.316z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-14" d="M23.188 5.862c.005.004.083-.447.077-.444-.006.002.345.295.346.288a5.865 5.865 0 00-.423.156z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-15" d="M-28.8-22.38c.006 0-.199-.417-.202-.412-.004.006.46.038.457.031a5.96 5.96 0 00-.256.381z" transform="matrix(.65546 .26993 -.37603 .68776 33.783 28.934)" stroke-width=".031"/>
    <path  class="sidebar__link--shard-16" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.11104 .42117 -.41903 -.04746 13.121 14.738)" stroke-width=".052"/>
    <path class="sidebar__link--shard-17" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(.33175 .22242 -.27903 .36079 25.903 17.758)" stroke-width=".052"/>
    <path class="sidebar__link--shard-18" d="M-25.464-21.094c.007 0-.198-.418-.201-.412-.004.005.46.037.457.031a5.96 5.96 0 00-.256.38z" transform="matrix(-.561 -.654 -.759 .65108 -7.108 2.943)" stroke-width=".031"/>
    <path class="sidebar__link--shard-19" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.11104 .42117 -.41903 -.04746 12.76 14.84)" stroke-width=".052"/>
    <path class="sidebar__link--shard-20" d="M23.263 5.995c.002.007.31-.332.304-.333-.007-.001.132.435.137.43a5.865 5.865 0 00-.44-.097z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-21" d="M23.263 5.995c.007.001-.168-.422-.172-.416-.004.005.45.065.447.059a5.865 5.865 0 00-.275.357z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-22" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(.37007 -.15028 .14263 .43323 34.639 10.41)" stroke-width=".052"/>
    <path class="sidebar__link--shard-23" d="M23.195 5.608c.002.007.31-.331.304-.333-.007-.001.132.435.137.43a5.865 5.865 0 00-.44-.097z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-24" d="M23.092 5.75c.007.002-.168-.421-.172-.416-.004.006.45.066.447.06a5.865 5.865 0 00-.275.357z" stroke-width=".029830319999999997"/>
    <path class="sidebar__link--shard-25" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(.37007 -.15028 .14263 .43323 34.909 10.33)" stroke-width=".052"/></g>
    </svg>
    <div class="sidebar__link sidebar__link--home  ">
     Building
    </div>
  </a>


	<a class="sidebar__link sidebar__link--vid" href="articles.html">
		<svg class="sidebar__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458"  ><circle r="12.548" cy="283.817" cx="13.245" stroke="#000" stroke-width=".864" stroke-linecap="round" fill="none" transform="translate(0 -270.542)"/><rect ry="2.442" y="5.086" x="7.01" height="16.379" width="12.472" fill="#fff" stroke="#000" stroke-width=".486" stroke-linecap="round"/><g stroke="#000"><rect ry=".651" y="8.903" x="8.603" height="3.581" width="5.047" fill="#0072ff" fill-opacity=".897" stroke-width=".531" stroke-linecap="round"/><path d="M8.886 14.525c.278-.135.45-.296.76-.163.115.05.223.207.38.163.147-.042.18-.277.325-.326.155-.052.275.222.325.271.083.084.253.182.38.109.079-.045.09-.165.163-.217.021-.015.323-.092.38-.054.075.05.099.153.163.217.126.126.205.133.38.108.241-.034.36-.258.596-.325.285-.082.086.059.217.217.095.113.314.155.435.054.062-.052.045-.167.108-.217.042-.034.11-.008.163 0 .074.01.16.006.217.054.062.052.051.16.108.217.103.103.258.157.38.054.07-.057.109-.144.163-.217M15.614 14.525c.109-.036.213-.128.326-.109.053.01-.038.125 0 .163.111.111.356-.153.38-.163.298-.128.032.167.38.109.064-.011.054-.127.108-.163.204-.136.2-.026.38 0 .072.01.145 0 .217 0" fill="none" stroke-width=".304" stroke-linecap="round"/><path d="M8.797 15.936c.118-.019.237-.03.353-.055.127-.026.272-.119.413-.054.035.016-.033.089 0 .109.049.03.118 0 .177 0 .078 0 .167.035.235 0 .214-.113.091-.331.413-.272.043.008.02.09.059.109.052.024.118 0 .176 0 .079 0 .16.02.236 0 .05-.013.41-.272.413-.272.059 0-.033.118 0 .163.054.075.16.104.235.163.177.14.146.233.413.163.068-.018.115-.076.177-.109.206-.108.404-.195.648-.162a.53.53 0 01.177.054c.137.072.225.237.412.163.452-.179.018-.152.472-.272.249-.065.146.074.412.109.066.008.396-.154.413-.163.061-.032.106-.12.176-.109.083.013.113.114.177.163.065.05.343.208.413.217.061.008.117-.038.176-.054.078-.02.16-.028.236-.054.082-.029.151-.087.236-.109.056-.015.118 0 .177 0 .058 0 .12-.015.176 0 .24.063.207.178.472.109.265-.07.08-.196.412-.109.068.018.209.05.177.109-.035.064-.157 0-.236 0" fill="none" stroke-width=".317" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8 9.594c.055-.109.077-.24.163-.326.039-.038.109 0 .163 0h.163c.072 0 .15-.028.217 0 .07.03.1.119.163.163.077.055.319.185.434.109.153-.102.027-.368.325-.326.076.011.1.118.163.163.066.047.151.061.217.108.21.15.105.203.38.272.07.017.157.04.217 0 .098-.065.096-.32.217-.38.272-.136.217.03.217.163M14.909 10.964c.108-.09.196-.214.326-.272.052-.023.11.032.162.055.075.032.147.068.217.108.057.033.099.118.163.109.14-.02.374-.42.597-.272.16.107.011.375.326.217.058-.029.05-.133.108-.162.148-.074.249.035.38.054.072.01.145 0 .217 0 .054 0 .11-.015.163 0 .078.022.145.072.217.108M15.01 12.467c.079-.155.073-.271.272-.271.075 0 .143.044.217.054.054.008.113-.021.163 0 .083.036.13.138.217.163.055.016.11-.032.163-.054.086-.037.32-.186.434-.163.04.008.026.08.054.108.048.049.33.21.38.218.13.018.306-.18.38-.218.135-.067.24-.054.38-.054" fill="none" stroke-width=".304" stroke-linecap="round"/><rect ry=".499" y="6.43" x="8.546" height="1.151" width="9.209" fill="#c700ff" stroke-width=".531" stroke-linecap="round"/><rect ry=".188" y="16.944" x="8.968" height=".883" width="8.442" fill="#00ff5f" stroke-width=".531" stroke-linejoin="round"/><rect ry=".109" y="18.765" x="8.984" height=".921" width="3.722" opacity=".99" fill="#ffac00" stroke-width=".531" stroke-linejoin="round"/><rect ry=".353" y="18.79" x="13.534" height=".883" width="3.837" fill="#ff0092" stroke-width=".531" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.674 9.876c.026.028-.144.318-.14.357.004.038.233.284.214.318-.02.033-.348-.04-.383-.024-.035.016-.199.31-.236.302-.038-.008-.07-.343-.096-.371-.026-.029-.356-.094-.36-.132-.004-.038.304-.172.323-.206.02-.033-.02-.367.014-.383.035-.015.258.236.296.244.037.008.343-.133.368-.105z" opacity=".99" fill="#ff00b7" stroke-width=".163" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.15 12.187v-.95s.617.352.608.314c-.01-.038-.608-.93-.608-.93l.532.227-.599-1.016-.484.94.541-.17-.588.93.55-.342" fill="#00ff30" fill-opacity=".897" stroke-width=".19" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
		<div class="sidebar__link sidebar__link--home  ">
			Articles
		</div>
	</a>

  <a class="sidebar__link sidebar__link--vid" href="videos.html">
    <svg class="sidebar__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458"><circle cx="13.245" cy="283.817" r="12.548" stroke="#000" stroke-width=".864" stroke-linecap="round" fill="none" transform="translate(0 -270.542)"/><g stroke="#000" stroke-linecap="round">
      <path class="sidebar__vid-rec" d="M7.976 7.046A2.537 2.537 0 005.434 9.59v7.373a2.537 2.537 0 002.542 2.542h10.54a2.537 2.537 0 002.542-2.542V9.589a2.537 2.537 0 00-2.543-2.543z" fill="#f90080" stroke-width=".46195667999999995"/>
      <path class="sidebar__vid-tri" d="M11.713 10.549c.859.03 4.64 2.152 4.65 2.664.01.546-4.2 3.083-4.678 2.819-.478-.265-.57-5.179-.102-5.46a.243.243 0 01.13-.023z" fill="#fff" stroke-width=".462"/></g>
    </svg>
    <div class="sidebar__link sidebar__link--home  ">
      Videos
    </div>
  </a>
</aside>
`;
const footer = String.raw`
<footer class="no-print">
  <div class="footer"> 
    <span><a class="footer__link-1" href="https://www.linkedin.com/in/omar-shishani-school/" target="_blank" rel="noopener">LinkedIn</a></span>
    <span><a class="footer__link-1" href="https://www.instructables.com/member/omarshishanischool/" target="_blank" rel="noopener">Instructables</a></span>
    <span><a class="footer__link-1" href="https://github.com/crazy-hobo" target="_blank" rel="noopener">Github</a></span>
    <span><a class="footer__link-1" href="https://medium.com/@omarshishanischool" target="_blank" rel="noopener">Medium</a></span>
  </div>
</footer>
<div class="footer__updated">Last Updated September 2020</div>
`;

const mobileNav = String.raw`
<div id="mobile-navigation-main-content" class="no-print">
  <!-- $ navbar elementet och mobile navigation kommer sist i HTML, för semantik $ -->
  <nav id="navbar-mobile">
    <a class="mobile-nav__anchor" href="index.html">
      Home
    </a>
    <a class="mobile-nav__anchor" href="about-me.html">
      About Me
    </a>
    <a class="mobile-nav__anchor mobile-nav__construction-anchor" href="construction.html">
      <svg class="sidebar__link--drill mobile-nav__construction-drill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458" height="60" width="60"><g stroke="#000"><path class="sidebar__link--drill-button sidebar__link--drill-piece" d="M11.118 15.112l1.525-.584c-.508-.822-.347-1.282-.287-1.98l-1.936.742.698 1.822" fill="#500" stroke-width=".263" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M9.37 11.767l-1.269.827-.335 1.01c.76 2.169 1.301 4.491 1.716 6.902l1.168.599 1.013-.006 1.138-.514.778-1.263c-.741-1.047-1.852-1.097-2.313-3.416-.27-1.182-.348-2.423.133-3.647l-.936-.518z" fill="#a00" stroke-width=".528"/><rect class="sidebar__link--drill-piece" ry=".629" transform="scale(1 -1) rotate(20.969)" y="-14.265" x="10.637" height="1.257" width="7.774" fill="#c8b7b7" stroke-width=".398" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-bit sidebar__link--drill-piece" d="M16.735 8.841l.414-1.423M17.552 8.434l.414-1.423M18.334 8.134l.413-1.423M19.13 7.83l.414-1.424M19.898 7.535l.414-1.424M20.67 7.24l.413-1.424M21.4 7.075l.414-1.423M15.94 9.212l.414-1.424" fill="none" stroke-width=".263"/><rect class="sidebar__link--drill-piece" transform="rotate(-20.97)" ry="1.494" y="21.501" x=".737" height="3.854" width="7.22" fill="#cd87de" stroke-width=".556" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M9.573 14.79l1.385-.53" fill="none" stroke-width=".244" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M9.732 15.922l1.23-.471" fill="none" stroke-width=".273" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M10.637 17.713l1.219-.467M10.063 16.88l1.28-.49" fill="none" stroke-width=".263" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M10.474 19.962l.68 1.774 3.675-1.409" fill="none" stroke-width=".149" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M11.442 20.666l2.99-1.146M11.14 19.818l2.99-1.146" fill="none" stroke-width=".149" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M8.845 21.022l1.116-.428-.438-1.14" fill="maroon" stroke-width=".263" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M6.069 10.102a1.49 1.49 0 00-.86 1.93l.465 1.215a1.49 1.49 0 001.93.86l5.422-2.079c.268-.102.488-.273.65-.484a2.144 1.927-20.97 00.063-.021 2.144 1.927-20.97 001.349-1.412 1.357 1.194-20.97 00.127-.043 1.357 1.194-20.97 00.84-1.6 1.357 1.194-20.97 00-1.695-.63 1.357 1.194-20.97 00-.254.127 2.144 1.927-20.97 00-1.746-.041 2.144 1.927-20.97 00-.064.027 1.488 1.488 0 00-.805.073z" fill="#cd87de" stroke-width=".4281381" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M6.316 10.91l1.23-.471M6.625 11.715l1.23-.472M6.912 12.434l1.23-.471M7.242 13.219l1.23-.471" fill="none" stroke-width=".27281358000000006" stroke-linecap="round"/><path class="sidebar__link--drill-piece" d="M12.296 7.95l1.372 3.58M14.106 7.965l.826 2.155" fill="none" stroke-width=".26385255"/><path class="sidebar__link--drill-piece" d="M13.513 8.015c-.06.054-.145.067-.216.101-.23.09-.462.178-.693.266l.118.308.953-.365c.045.012.049.08.001.09-.304.127-.614.24-.921.36l.123.322c.31-.115.616-.242.929-.35.04-.016.074.031.05.067-.087.046-.192.075-.286.115l-.66.253.115.3c.323-.121.642-.254.969-.364.044 0 .042.081-.004.085-.308.13-.622.241-.933.363l.112.292c.322-.12.641-.252.966-.364.04-.017.075.03.05.066-.086.046-.191.076-.285.115l-.699.268.127.33c.323-.12.64-.253.967-.362.055-.013.07.074.017.085-.313.132-.633.246-.949.37l.106.276.99-.38c.034.007.07.06.03.08-.325.138-.658.256-.987.385l.109.284.966-.37a1.74 1.74 0 00.26-.48c-.033.006-.047-.01-.055-.05L14.04 8.17a1.845 1.845 0 00-.521-.156h-.003zM12.533 8.197c.021.04.022.124.082.075l.734-.282a2.145 2.145 0 00-.852.113l.036.094zM13.683 11.197c.023.033.02.133.076.084.26-.119.502-.285.697-.495l-.812.31.039.101z" fill="maroon" stroke-width=".012" stroke-linecap="round" stroke-linejoin="round"/><path class="sidebar__link--drill-piece" d="M12.933 9.563l1.052-.403M12.766 9.19l1.052-.403M12.615 8.776l1.052-.403M13.412 10.716l1.051-.403M13.25 10.357l1.052-.403M13.096 9.936l1.052-.403M12.418 8.401l1.052-.403M13.61 11.058l1.053-.403" fill="none" stroke-width=".089" stroke-linecap="round"/><circle class="sidebar__link--drill-circle" r="12.548" cy="13.295" cx="13.361" fill="none" stroke-width=".864" stroke-linecap="round"/><path class="sidebar__link--broken-circle" d="M23.935 6.538c3.655 5.72 2.1 13.309-3.51 17.13h0c-5.729 3.9-13.535 2.419-17.436-3.31C-.91 14.63.57 6.825 6.3 2.924 11.428-.57 18.285.233 22.476 4.671l.12.13" fill="none" stroke="#000" stroke-width=".864"/>
      <path class="sidebar__link--shard-1" d="M23.263 5.995c.004.006.188-.422.181-.421-.006 0 .272.374.275.368a5.96 5.96 0 00-.456.053z" stroke-width=".031"/><path class="sidebar__link--shard-2" d="M23.195 5.608c-.003.005.354.056.352.052a4.606 4.606 0 00-.22.278 4.62 4.62 0 00-.132-.33z" stroke-width=".0234962"/><path class="sidebar__link--shard-3" d="M22.976 5.31c-.005.006.448.072.446.065a5.848 5.848 0 00-.28.354 5.865 5.865 0 00-.166-.419z" stroke-width=".029830319999999997"/><path class="sidebar__link--shard-4" d="M23.092 5.75c.003.007.256-.375.25-.375-.007 0 .197.41.2.403a5.865 5.865 0 00-.45-.027z" stroke-width=".029830319999999997"/><path class="sidebar__link--shard-5" d="M23.188 5.862c.003.006.256-.375.25-.376-.008 0 .197.41.2.404a5.865 5.865 0 00-.45-.028z" stroke-width=".029830319999999997"/><path class="sidebar__link--shard-6" d="M-25.464-21.094c.007 0-.198-.418-.201-.412-.004.005.46.037.457.031a5.96 5.96 0 00-.256.38z" transform="matrix(-.561 -.654 -.759 .65108 -7.108 2.943)" stroke-width=".031"/>
      <path class="sidebar__link--shard-7" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.50387 .26367 .19817 .45906 15.182 20.329)" stroke-width=".052"/>
      <path class="sidebar__link--shard-8" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.394 -.30292 -.37137 .43416 7.114 6.816)" stroke-width=".052"/>
      <path class="sidebar__link--shard-9" d="M23.095 6.11c.004.006.188-.422.18-.421-.006 0 .273.374.275.368a5.96 5.96 0 00-.455.053z" stroke-width=".031"/>
      <path class="sidebar__link--shard-10" d="M23.188 5.424c-.004.005.45.07.447.065a5.848 5.848 0 00-.28.353 5.865 5.865 0 00-.167-.418z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-11" d="M23.188 5.862c.003.006.256-.375.25-.376-.008 0 .197.41.2.404a5.865 5.865 0 00-.45-.028z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-12" d="M23.263 5.995c.006.004.003-.462-.003-.458-.006.003.399.233.399.226 0-.007-.402.229-.396.232z" stroke-width=".031"/>
      <path class="sidebar__link--shard-13" d="M23.092 5.75c-.001.007.44-.114.435-.119a5.848 5.848 0 00-.113.436 5.865 5.865 0 00-.322-.316z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-14" d="M23.188 5.862c.005.004.083-.447.077-.444-.006.002.345.295.346.288a5.865 5.865 0 00-.423.156z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-15" d="M-28.8-22.38c.006 0-.199-.417-.202-.412-.004.006.46.038.457.031a5.96 5.96 0 00-.256.381z" transform="matrix(.65546 .26993 -.37603 .68776 33.783 28.934)" stroke-width=".031"/>
      <path  class="sidebar__link--shard-16" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.11104 .42117 -.41903 -.04746 13.121 14.738)" stroke-width=".052"/>
      <path class="sidebar__link--shard-17" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(.33175 .22242 -.27903 .36079 25.903 17.758)" stroke-width=".052"/>
      <path class="sidebar__link--shard-18" d="M-25.464-21.094c.007 0-.198-.418-.201-.412-.004.005.46.037.457.031a5.96 5.96 0 00-.256.38z" transform="matrix(-.561 -.654 -.759 .65108 -7.108 2.943)" stroke-width=".031"/>
      <path class="sidebar__link--shard-19" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(-.11104 .42117 -.41903 -.04746 12.76 14.84)" stroke-width=".052"/>
      <path class="sidebar__link--shard-20" d="M23.263 5.995c.002.007.31-.332.304-.333-.007-.001.132.435.137.43a5.865 5.865 0 00-.44-.097z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-21" d="M23.263 5.995c.007.001-.168-.422-.172-.416-.004.005.45.065.447.059a5.865 5.865 0 00-.275.357z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-22" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(.37007 -.15028 .14263 .43323 34.639 10.41)" stroke-width=".052"/>
      <path class="sidebar__link--shard-23" d="M23.195 5.608c.002.007.31-.331.304-.333-.007-.001.132.435.137.43a5.865 5.865 0 00-.44-.097z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-24" d="M23.092 5.75c.007.002-.168-.421-.172-.416-.004.006.45.066.447.06a5.865 5.865 0 00-.275.357z" stroke-width=".029830319999999997"/>
      <path class="sidebar__link--shard-25" d="M-23.651-18.392c.012 0-.34-.716-.346-.706-.006.01.79.064.784.053-.005-.01-.45.652-.438.653z" transform="matrix(.37007 -.15028 .14263 .43323 34.909 10.33)" stroke-width=".052"/></g>
      </svg>
      <span class="mobile-nav__construction-span"> Building</span>
    </a>
    <a class="mobile-nav__anchor" href="articles.html">
      Articles
    </a>
    <a class="mobile-nav__anchor" href="projects.html">
      Projects
    </a>
    <a class="mobile-nav__anchor" href="videos.html">
      Videos
    </a>
  </nav> <!-- <nav id="navbar-3"> -->
</div> <!-- <div id="mobile-navigation-main-content"> -->
<div id="navbar-hamburger" class="no-print"> 
  <div class="navbar-hamburger-bun"></div>
  <div class="navbar-hamburger-bun"></div>
  <div class="navbar-hamburger-bun"></div>
</div>
`;

document.querySelector('header').insertAdjacentHTML('afterend', sidebar);
document.querySelector('main').insertAdjacentHTML('afterend', footer);

const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', mobileNav);


const button_scroll_down = document.querySelector(".button--scroll-down");
let scroll_opa_default = 1;
let prevScrollpos = window.pageYOffset;