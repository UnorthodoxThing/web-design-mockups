

  console.log("Initialise gallery script..."); // * Possible to refactor with 'documentSelectorAll' and bracket indexation
  // gallery #1

  var gallery1 = document.querySelector('.container-frame-one');
  var gallery1Image = document.querySelector('.container-frame-one img');
  var gallery1Source = document.querySelector('.container-frame-one source'); // gallery #2

  var gallery2 = document.querySelector('.container-frame-two');
  var gallery2Image = document.querySelector('.container-frame-two img');
  var gallery2Source = document.querySelector('.container-frame-two source'); // module #1

  var module1 = document.querySelector('.module-one');
  var module1Image = document.querySelector('.module-one img'); // module #2

  var module2 = document.querySelector('.module-two');
  var module2Image = document.querySelector('.module-two img'); // close buttons

  var closeBtn1 = document.querySelector('.module-one .close');
  var closeBtn2 = document.querySelector('.module-two .close');
  var salesPitchContainer = document.querySelector('.container-sales-pitch'); // # Click Event for Gallery #1

  gallery1.addEventListener('click', function () {
    module1.style.display = 'block';
    salesPitchContainer.style.zIndex = '-1';

    if (window.innerWidth > 600) {
      module1Image.src = gallery1Image.src;
    } else {
      module1Image.src = gallery1Source.srcset;
    }

    disableScroll();
  });
  closeBtn1.addEventListener('click', function () {
    module1.style.display = 'none';
    salesPitchContainer.style.zIndex = '66';
    enableScroll();
  }); // # Click Event for Gallery #2

  gallery2.addEventListener('click', function () {
    module2.style.display = 'block';
    salesPitchContainer.style.zIndex = '-1';

    if (window.innerWidth > 600) {
      module2Image.src = gallery2Image.src;
    } else {
      module2Image.src = gallery2Source.srcset;
    }

    disableScroll();
  });
  closeBtn2.addEventListener('click', function () {
    module2.style.display = 'none';
    salesPitchContainer.style.zIndex = '66';
    enableScroll();
  }); // CANCEL SCROLL INTERACTION
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  } // modern Chrome requires { passive: false } when adding event


  var supportsPassive = false;

  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    }));
  } catch (e) {}

  var wheelOpt = supportsPassive ? {
    passive: false
  } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; // call this to Disable

  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF

    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop

    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  } // call this to Enable


  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeTFJbWFnZSIsImdhbGxlcnkxU291cmNlIiwiZ2FsbGVyeTIiLCJnYWxsZXJ5MkltYWdlIiwiZ2FsbGVyeTJTb3VyY2UiLCJtb2R1bGUxIiwibW9kdWxlMUltYWdlIiwibW9kdWxlMiIsIm1vZHVsZTJJbWFnZSIsImNsb3NlQnRuMSIsImNsb3NlQnRuMiIsInNhbGVzUGl0Y2hDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiekluZGV4Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNyYyIsInNyY3NldCIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJrZXlzIiwicHJldmVudERlZmF1bHQiLCJlIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwia2V5Q29kZSIsInN1cHBvcnRzUGFzc2l2ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwid2hlZWxPcHQiLCJwYXNzaXZlIiwid2hlZWxFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFLENBRUE7QUFFQTs7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBakI7QUFDQSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBdEI7QUFDQSxJQUFNRSxjQUFjLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBdkIsQyxDQUNBOztBQUNBLElBQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFqQjtBQUNBLElBQU1JLGFBQWEsR0FBR0wsUUFB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RTtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU0osWUFBVCxHQUF3QjtBQUN0QkwsRUFBQUEsTUFBTSxDQUFDbUIsbUJBQVAsQ0FBMkIsZ0JBQTNCLEVBQTZDWixjQUE3QyxFQUE2RCxLQUE3RDtBQUNBUCxFQUFBQSxNQUFNLENBQUNtQixtQkFBUCxDQUEyQkYsVUFBM0IsRUFBdUNWLGNBQXZDLEVBQXVEUSxRQUF2RDtBQUNBZixFQUFBQSxNQUFNLENBQUNtQixtQkFBUCxDQUEyQixXQUEzQixFQUF3Q1osY0FBeEMsRUFBd0RRLFFBQXhEO0FBQ0FmLEVBQUFBLE1BQU0sQ0FBQ21CLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDViwyQkFBdEMsRUFBbUUsS0FBbkU7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSW5pdGlhbGlzZSBnYWxsZXJ5IHNjcmlwdC4uLlwiKTtcclxuXHJcbi8vICogUG9zc2libGUgdG8gcmVmYWN0b3Igd2l0aCAnZG9jdW1lbnRTZWxlY3RvckFsbCcgYW5kIGJyYWNrZXQgaW5kZXhhdGlvblxyXG5cclxuLy8gZ2FsbGVyeSAjMVxyXG5jb25zdCBnYWxsZXJ5MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZnJhbWUtb25lJyk7XHJcbmNvbnN0IGdhbGxlcnkxSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZyYW1lLW9uZSBpbWcnKTtcclxuY29uc3QgZ2FsbGVyeTFTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZyYW1lLW9uZSBzb3VyY2UnKTtcclxuLy8gZ2FsbGVyeSAjMlxyXG5jb25zdCBnYWxsZXJ5MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZnJhbWUtdHdvJyk7XHJcbmNvbnN0IGdhbGxlcnkySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZyYW1lLXR3byBpbWcnKTtcclxuY29uc3QgZ2FsbGVyeTJTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZyYW1lLXR3byBzb3VyY2UnKTtcclxuLy8gbW9kdWxlICMxXHJcbmNvbnN0IG1vZHVsZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlLW9uZScpO1xyXG5jb25zdCBtb2R1bGUxSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlLW9uZSBpbWcnKTtcclxuLy8gbW9kdWxlICMyXHJcbmNvbnN0IG1vZHVsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlLXR3bycpO1xyXG5jb25zdCBtb2R1bGUySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlLXR3byBpbWcnKTtcclxuLy8gY2xvc2UgYnV0dG9uc1xyXG5jb25zdCBjbG9zZUJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlLW9uZSAuY2xvc2UnKTtcclxuY29uc3QgY2xvc2VCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZS10d28gLmNsb3NlJyk7XHJcblxyXG5jb25zdCBzYWxlc1BpdGNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1zYWxlcy1waXRjaCcpO1xyXG5cclxuLy8gIyBDbGljayBFdmVudCBmb3IgR2FsbGVyeSAjMVxyXG5nYWxsZXJ5MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kdWxlMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHNhbGVzUGl0Y2hDb250YWluZXIuc3R5bGUuekluZGV4PSAnLTEnO1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xyXG4gICAgICAgIG1vZHVsZTFJbWFnZS5zcmMgPSBnYWxsZXJ5MUltYWdlLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kdWxlMUltYWdlLnNyYyA9IGdhbGxlcnkxU291cmNlLnNyY3NldDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlU2Nyb2xsKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBtb2R1bGUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzYWxlc1BpdGNoQ29udGFpbmVyLnN0eWxlLnpJbmRleD0gJzY2JztcclxuICAgIGVuYWJsZVNjcm9sbCgpO1xyXG59KVxyXG5cclxuLy8gIyBDbGljayBFdmVudCBmb3IgR2FsbGVyeSAjMlxyXG5nYWxsZXJ5Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kdWxlMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHNhbGVzUGl0Y2hDb250YWluZXIuc3R5bGUuekluZGV4PSAnLTEnO1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xyXG4gICAgICAgIG1vZHVsZTJJbWFnZS5zcmMgPSBnYWxsZXJ5MkltYWdlLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kdWxlMkltYWdlLnNyYyA9IGdhbGxlcnkyU291cmNlLnNyY3NldDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlU2Nyb2xsKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBtb2R1bGUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzYWxlc1BpdGNoQ29udGFpbmVyLnN0eWxlLnpJbmRleD0gJzY2JztcclxuICAgIGVuYWJsZVNjcm9sbCgpO1xyXG59KVxyXG5cclxuLy8gQ0FOQ0VMIFNDUk9MTCBJTlRFUkFDVElPTlxyXG5cclxuLy8gbGVmdDogMzcsIHVwOiAzOCwgcmlnaHQ6IDM5LCBkb3duOiA0MCxcclxuLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XHJcbnZhciBrZXlzID0gezM3OiAxLCAzODogMSwgMzk6IDEsIDQwOiAxfTtcclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XHJcbiAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xyXG4gICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtb2Rlcm4gQ2hyb21lIHJlcXVpcmVzIHsgcGFzc2l2ZTogZmFsc2UgfSB3aGVuIGFkZGluZyBldmVudFxyXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XHJcbnRyeSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTsgfVxyXG4gIH0pKTtcclxufSBjYXRjaChlKSB7fVxyXG5cclxudmFyIHdoZWVsT3B0ID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XHJcbnZhciB3aGVlbEV2ZW50ID0gJ29ud2hlZWwnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpID8gJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcclxuXHJcbi8vIGNhbGwgdGhpcyB0byBEaXNhYmxlXHJcbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTsgLy8gb2xkZXIgRkZcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2Rlcm4gZGVza3RvcFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cywgZmFsc2UpO1xyXG59XHJcblxyXG4vLyBjYWxsIHRoaXMgdG8gRW5hYmxlXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMsIGZhbHNlKTtcclxufSJdLCJmaWxlIjoiZ2FsbGVyeS5qcyJ9