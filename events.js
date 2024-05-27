$(function() {
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
    $.ajax({
        url: "events.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var accordion = $("#accordion");
            $.each(data.events, function(index, event) {
                var eventHtml = `
                    <h3>${event.title}</h3>
                    <div>
                        <div class="event-info">
                            <img src="${event.image}" alt="Etkinlik Resmi">
                            <div class="event-details">
                                <span class="event-date">${event.date}</span>
                                <p>${event.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                accordion.append(eventHtml);
            });
            accordion.accordion("refresh");
        },
        error: function(error) {
            console.error("Error fetching events data", error);
        }
    });
});
