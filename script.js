;(function()
{
  $(function()
  {
    var SCROLL_PADDING_PX    = 50;
    var $buttons             = document.querySelectorAll('.menu_button');
    var $portfolio_container = document.querySelector('#portfolio > .content');
    var $portfolio_buffer    = document.createDocumentFragment();

    var image_data = [
      {
        group: 'Ready-to-wear'
        ,path: 'ready_to_wear'
        ,subgroups: [
          {
            name: 'Pearl by Lela Rose'
            ,path: 'pearl_by_lela_rose'
            ,images: [
              {name: '01.jpg', frame: true}
              ,{name: '02.jpg', frame: true}
              ,{name: '03.jpg', frame: true}
              ,{name: '04.jpg', frame: true}
              ,{name: '05.jpg', frame: true}
              ,{name: '06.jpg', frame: true}
              ,{name: '07.jpg', frame: true}
              ,{name: '08.jpg', frame: true}
              ,{name: '09.jpg', frame: true}
              ,{name: '10.jpg', frame: true}
              ,{name: '11.jpg', frame: true}
              ,{name: '12.jpg', frame: true}
            ]
          }
          ,{
            name: 'Arielle'
            ,path: 'arielle'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
              ,{name: '05.jpg'}
              ,{name: '06.jpg'}
              ,{name: '07.jpg'}
              ,{name: '08.jpg'}
              ,{name: '09.jpg'}
            ]
          }
          ,{
            name: 'Jaline'
            ,path: 'jaline'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
              ,{name: '05.jpg'}
              ,{name: '06.jpg'}
            ]
          }
          ,{
            name: 'theTEN'
            ,path: 'theten'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
              ,{name: '05.jpg'}
            ]
          }
          ,{
            name: 'BioRomper'
            ,path: 'bioromper'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
            ]
          }
        ]
      }
      ,{
        group: 'Luxury'
        ,path: 'luxury'
        ,subgroups: [
          {
            name: 'B.Y. by Bonnie Young'
            ,path: 'by_by_bonnie_young'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
            ]
          }
          ,{
            name: 'Harclem'
            ,path: 'harclem'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg', frame: true}
            ]
          }
          ,{
            name: 'Nicolas Caito'
            ,path: 'nicolas_caito'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
            ]
          }
          ,{
            name: 'Lela Rose'
            ,path: 'lela_rose'
            ,images: [
              {name: '01.jpg', frame: true}
              ,{name: '02.jpg', frame: true}
              ,{name: '03.jpg', frame: true}
              ,{name: '04.jpg', frame: true}
              ,{name: '05.jpg', frame: true}
            ]
          }
        ]
      }
      ,{
        group: 'Occasion/Bridal'
        ,path: 'occasion_bridal'
        ,subgroups: [
          {
            name: 'Selia Yang'
            ,path: 'selia_yang'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
            ]
          }
          ,{
            name: 'Monica Byrne'
            ,path: 'monica_byrne'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
            ]
          }
          ,{
            name: 'Jodi Fried'
            ,path: 'jodi_fried'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
              ,{name: '05.jpg'}
              ,{name: '06.jpg'}
              ,{name: '07.jpg'}
            ]
          }
        ]
      }
      ,{
        group: 'Custom'
        ,path: 'custom'
        ,subgroups: [
          {
            name: 'theTEN'
            ,path: 'theten'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
              ,{name: '04.jpg'}
              ,{name: '05.jpg'}
              ,{name: '06.jpg'}
              ,{name: '07.jpg'}
              ,{name: '08.jpg'}
              ,{name: '09.jpg'}
              ,{name: '10.jpg'}
              ,{name: '11.jpg'}
            ]
          }
          ,{
            name: 'Personal Space'
            ,path: 'personal_space'
            ,images: [
              {name: '01.jpg'}
              ,{name: '02.jpg'}
              ,{name: '03.jpg'}
            ]
          }
        ]
      }
    ];

    image_data.forEach(function(_group_data)
    {
      var $_portfolio_subgroup_container = document.createElement('div');
      var $_heading                      = document.createElement('h2');
      var _group_path                    = '/img/' + _group_data.path;

      $_heading.innerText = _group_data.group;

      $_portfolio_subgroup_container.appendChild($_heading);

      $_portfolio_subgroup_container.classList.add('portfolio_subgroup_container');
      $_heading.classList.add('section_heading');

      _group_data.subgroups.forEach(function(_subgroup)
      {
        var _subgroup_path       = _group_path + '/' + _subgroup.path;
        var $_portfolio_subgroup = document.createElement('div');
        var $_column_container   = document.createElement('div');
        var $_subgroup_heading   = document.createElement('h3');

        $_subgroup_heading.innerText = _subgroup.name;

        $_portfolio_subgroup.appendChild($_subgroup_heading);

        $_portfolio_subgroup.classList.add('portfolio_subgroup');
        $_column_container.classList.add('column_container');
        $_subgroup_heading.classList.add('subgroup_heading');

        var _image_columns = [
          document.createElement('div')
          ,document.createElement('div')
          ,document.createElement('div')
        ]

        var _image_column_count = _image_columns.length;

        _subgroup.images.forEach(function(_image, _index)
        {
          $_img     = document.createElement('img');
          $_img.src = _subgroup_path + '/' + _image.name;

          $_img.classList.add('image');

          if(_image.frame)
          {
            $_img.classList.add('frame');
          }

          _image_columns[_index % _image_column_count].appendChild($_img);

          _image_columns.forEach(function(_column)
          {
            _column.classList.add('image_column');
            $_column_container.appendChild(_column);
          });
        });

        $_portfolio_subgroup.appendChild($_column_container);
        $_portfolio_subgroup_container.appendChild($_portfolio_subgroup);
        $portfolio_buffer.appendChild($_portfolio_subgroup_container);
      });


      $portfolio_container.appendChild($portfolio_buffer);
    });

    $buttons.forEach(function(_button)
    {
      var $_button = $(_button);

      _button.addEventListener('click', function(_event)
      {
        $('html, body').animate({
          scrollTop: $('section#' + _button.dataset.id).offset().top - SCROLL_PADDING_PX
        }, 2000, 'easeInOutQuart');
      });
    });
  });
}());

