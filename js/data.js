(function($) {

    function render_about(data, div){
        var list = $("<ul>")
            .attr("style", "list-style-type:none")
            .appendTo(div)
        $.each(data, function(i, content) {
            var item = $("<li>")
                .appendTo(list);
            $("<span>")
                .html(content+'')
                .appendTo(item);
        });
    };

    function render_education(data, div){
        var list = $("<ul>")
            .appendTo(div)
        $.each(data, function(i, education) {
            var item = $("<li>")
                .appendTo(list);

            if (education.degree.length > 0){
                $("<span>")
                    .html('<strong>'+education.degree + '</strong>, ')
                    .appendTo(item);
            };
            if (education.department.length > 0){
                $("<span>")
                    .html(education.department + ', ')
                    .appendTo(item);
            };
            if (education.institute.length > 0){
                $("<span>")
                    .html(education.institute + ', ')
                    .appendTo(item);
            };
            if (education.date.length > 0){
                $("<span>")
                    .html(education.date)
                    .appendTo(item);
            };
        });
    };

    function render_work(data, div){
        var list = $("<ul>")
            .appendTo(div)
        $.each(data, function(i, work) {
            var item = $("<li>")
                .appendTo(list);

            if (work.position.length > 0){
                $("<span>")
                    .html('<strong>'+work.position + '</strong>, ')
                    .appendTo(item);
            };
            if (work.department.length > 0){
                $("<span>")
                    .html(work.department + ', ')
                    .appendTo(item);
            };
            if (work.institute.length > 0){
                $("<span>")
                    .html(work.institute + ', ')
                    .appendTo(item);
            };
            if (work.date.length > 0){
                $("<span>")
                    .html(work.date)
                    .appendTo(item);
            };
        });
    };

    function render_interest(data, div){
        var list = $("<ul>")
            .appendTo(div)
        $.each(data, function(i, content) {
            var item = $("<li>")
                .appendTo(list);
            $("<span>")
                .html('<strong>'+content+'</strong>')
                .appendTo(item);
        });
    };

    function render_publication(data, div, t){
        var list = $("<ul>")
            .appendTo(div)
        $.each(data, function(i, paper) {
            var item = $("<li>")
                .attr("id", t+(i+1))
                .appendTo(list);
            $("<span>")
                .html('<strong>'+paper.title+'</strong><br>')
                .appendTo(item);

            var authors = paper.author.replace('Jheng-Long Wu', '<strong>Jheng-Long Wu</strong>');
            $("<span>")
                .html(authors+'<br>')
                .appendTo(item);
            
            
            $("<span>")
                .addClass("source")
                .html(paper.source+', ')
                .appendTo(item);
            if (paper.location){
                $("<span>")
                    .html(paper.location+', ')
                    .appendTo(item);
            };
            if (paper.page.length > 0){
                $("<span>")
                    .html(paper.page + '. ')
                    .appendTo(item);
            };
            if (paper.level.length > 0){
                $("<span>")
                    .html(paper.level)
                    .appendTo(item);
            };
            $("<span>")
                .html("<br>")
                .appendTo(item);
            $("<span>")
                .html(paper.date)
                .appendTo(item);
        });
    };

    function render_project(data, div){
        var list = $("<ul>")
            .appendTo(div)
        $.each(data, function(i, project) {
            var item = $("<li>")
                .appendTo(list);

            if (project.title.length > 0){
                $("<span>")
                    .html('<strong>'+project.title + ', </strong>')
                    .appendTo(item);
            };
            if (project.sponsor.length > 0){
                $("<span>")
                    .html(project.sponsor + ', ')
                    .appendTo(item);
            };
            if (project.duration.length > 0){
                $("<span>")
                    .html(project.duration + ', ')
                    .appendTo(item);
            };
            if (project.amount.length > 0){
                $("<span>")
                    .html(project.amount)
                    .appendTo(item);
            };
        });
    }

    function render_contact(data, div){
        var list = $("<ul>")
        .appendTo(div)

        var item = $("<li>")
            .appendTo(list);
        $("<span>")
            .html("<strong>Address:</strong> " + data.address)
            .appendTo(item);
        var item = $("<li>")
            .appendTo(list);
        $("<span>")
            .html("<strong>Organization:</strong> " + data.organization)
            .appendTo(item);
        var item = $("<li>")
            .appendTo(list);
        $("<span>")
            .html("<strong>Office:</strong> " + data.office)
            .appendTo(item);
        var item = $("<li>")
            .appendTo(list);
        $("<span>")
            .html("<strong>Phone:</strong> " + data.phone)
            .appendTo(item);
        var item = $("<li>")
            .appendTo(list);
        $("<span>")
            .html("<strong>E-mail:</strong> " + data.email)
            .appendTo(item);
        var item = $("<li>")
            .appendTo(list);
        $("<span>")
            .html("<strong>Note:</strong> " + data.note)
            .appendTo(item);
    };

    function render_photo(path, div){
        var list = $("<img>")
        .attr("src", path)
        .appendTo(div)
    }

    function render_logo(path, div){
        var list = $("<img>")
        .attr("src", path, "height", 42, "width", 50)
        .appendTo(div)
    }

    function render_qr(path, div){
        var list = $("<img>")
        .attr("src", path)
        .appendTo(div)
    }

    function do_render(data){
        render_about(data.about, $("#about"));
        render_photo("img/me.jpg", $("#photo"));
        render_qr("img/QR.png", $("#qr"));
        render_education(data.education, $("#education"));
        render_work(data.work, $("#works"));
        render_interest(data.interest, $("#interests"));
        render_publication(data.journal, $("#journal"), "J");
        render_publication(data.conference, $("#conference"), "C");
        render_project(data.project, $("#projects"));
        render_contact(data.contact, $("#contact"));
    }

    $(document).ready(function() {
        $.getJSON('data/data.json', function(data) {
            do_render(data);
        });
    });
    
    

})( jQuery );