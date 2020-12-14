(() => {

  class accordion {
    constructor(obj){

      console.log('obj', obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const $triggerLen = $trigger.length;
      let index = 0;
      while (index < $triggerLen) {
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }

    clickHandler = (e) => {
      e.preventDefault();
      
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      
      if($content.style.display === 'block'){
        $content.style.display = 'none';
      }else {
        $content.style.display = 'block';
      }
    };
  }

  const fuckinAccordion = new accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const dummyAccordion = new accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  });

  const nextAccordion = new accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });

})()
