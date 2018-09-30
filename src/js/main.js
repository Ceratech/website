import '../scss/main.scss';
import $ from 'jquery';

class MenuHightlighter {

  constructor(window) {
    this.$navigationLinks = $('nav > ul > li > a');
    this.sections = $('section').get().reverse();

    console.log($('header'));

    this.sectionIdTonavigationLink = this.sections.reduce((obj, section) => {
      const id = section.getAttribute('id');
      obj[id] = $('nav > ul > li > a[href=\\#' + id + ']');
      return obj;
    }, {});

    $(window).scroll(_ => this.hightlighNavigation());
  }

  hightlighNavigation() {
    const scrollPosition = $(window).scrollTop();

    this.sections.some(section => {
      const currentSection = $(section);
      const sectionTop = currentSection.offset().top;

      if (scrollPosition >= sectionTop) {
        const id = currentSection.attr('id');
        const $navigationLink = this.sectionIdTonavigationLink[id];

        if (!$navigationLink.hasClass('active')) {
          this.$navigationLinks.removeClass('active');
          $navigationLink.addClass('active');
        }

        return true;
      }

      return false;
    });
  }
}

$(document).ready(_ => new MenuHightlighter(window));
