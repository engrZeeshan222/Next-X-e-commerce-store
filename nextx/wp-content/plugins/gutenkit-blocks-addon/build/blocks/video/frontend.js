document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".video-content[data-settings]").forEach((t=>{const e=JSON.parse(t.getAttribute("data-settings"));let o=t.querySelector(".gkit-inline-youtube-video-iframe");e?.videoType&&"youtube"==e?.videoType&&function(t,e){function o(){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",t.async=!0;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),t.onload=n}let i;function n(){const e=window.YT;e&&"function"==typeof e.Player?i=new e.Player(t,{events:{onReady:a,onStateChange:r}}):setTimeout(o,500)}function a(t){}function r(t){t.data==window.YT.PlayerState.ENDED&&e?.isVideoLoop&&i.seekTo(5)}o()}(o,e);const i=t.querySelector(".gkit-video-frame-overlay");e?.isImageOverlay&&(e?.overlayPlayIcon&&!e?.overlayLightbox||!e?.overlayLightbox&&!e?.overlayPlayIcon)&&i.addEventListener("click",(function(o){i.classList.add("gkit-video-frame-overlay-img");let n=t.querySelectorAll(".gkit-inline-video-iframe");"selfHosted"!==e?.videoType?n.forEach((t=>{var e=new URL(t.src);e.searchParams.set("autoplay","1"),t.src=e.toString()})):n.forEach((t=>{t.play()}))})),Fancybox.bind(t,"[data-fancybox=true]",{Html:{videoAutoplay:"selfHosted"==e?.videoType?!e?.isPlayerControlsEnabled||e?.isAutoPlay:e?.playerControl?e?.isAutoPlay:1,vimeo:{muted:e?.isVideoMute,loop:e?.isVideoLoop,controls:!0,title:e?.isIntroTitle,portrait:e?.isIntroPortrait,byline:e?.isIntroByLine},youtube:{mute:e?.isVideoMute?"1":"0",loop:e?.isVideoLoop?"1":"0",controls:e?.playerControl?"1":"0",start:e?.videoStartTime,end:e?.videoEndTime,playlist:e.getYoutubeVideoId?e.getYoutubeVideoId:"",autoplay:e?.isAutoPlay?"1":"0"},videoTpl:"selfHosted"==e?.videoType&&""!==e.selfVideoURL&&`<video src=${e.selfVideoURL}#t=${e?.videoStartTime},${e?.videoEndTime} \n\t\t\t\t\t\tpreload=${e?.videoPreLoad}\n\t\t\t\t\t\tid="player"\t\n                        loop=${e?.isVideoLoop}\n\t\t\t\t\t\tmuted=${e?.isVideoMute}\n                        ${e?.isPlayerControlsEnabled?"controls":""}\n\t\t\t\t\t\tcontrolsList=${e?.isDownloadButton?"default":"nodownload"}\t\t\t\n\t\t\t\t\t\tposter=${e?.posterImage?e?.posterImage:""}\n\t\t\t\t\t>\n\t\t\t\t    </video>\n\t\t\t\t    `}})}))}));