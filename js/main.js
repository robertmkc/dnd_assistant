var mc_spell_slots = [ 
    { "level" : 1,  "ss_1" : 2, "ss_2" : 0, "ss_3" : 0, "ss_4" : 0, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 2,  "ss_1" : 3, "ss_2" : 0, "ss_3" : 0, "ss_4" : 0, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 3,  "ss_1" : 4, "ss_2" : 2, "ss_3" : 0, "ss_4" : 0, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 4,  "ss_1" : 4, "ss_2" : 3, "ss_3" : 0, "ss_4" : 0, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 5,  "ss_1" : 4, "ss_2" : 3, "ss_3" : 2, "ss_4" : 0, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 6,  "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 0, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 7,  "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 1, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 8,  "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 2, "ss_5" : 0, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 9,  "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 1, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 10, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 0, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 11, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 12, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 0, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 13, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 1, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 14, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 1, "ss_8" : 0, "ss_9" : 0 },
    { "level" : 15, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 1, "ss_8" : 1, "ss_9" : 0 },
    { "level" : 16, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 1, "ss_8" : 1, "ss_9" : 0 },
    { "level" : 17, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 2, "ss_6" : 1, "ss_7" : 1, "ss_8" : 1, "ss_9" : 1 },
    { "level" : 18, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 3, "ss_6" : 1, "ss_7" : 1, "ss_8" : 1, "ss_9" : 1 },
    { "level" : 19, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 3, "ss_6" : 2, "ss_7" : 1, "ss_8" : 1, "ss_9" : 1 },
    { "level" : 20, "ss_1" : 4, "ss_2" : 3, "ss_3" : 3, "ss_4" : 3, "ss_5" : 3, "ss_6" : 2, "ss_7" : 2, "ss_8" : 1, "ss_9" : 1 },
]

$( document ).ready(function() {
    GetConditions();
    GetMonsterTypes();
    GetSpells();
    GetSkills();
    GetEquipment();
    GetClasses();
    for (var x=1; x<=20; x++)
    {
        $("#character_level").append("<option value=\"" + x + "\">Level " + x + "</option>");
    }

    if (readCookie("settings") != "")
        settings = JSON.parse(readCookie("settings"));

    if (readCookie("characters") != "")
        characters = JSON.parse(readCookie("characters"));
    RedrawCharacters();
    DrawCharacters();

    if (readCookie("monsters") != "")
        monsters = JSON.parse(readCookie("monsters"));
    RedrawMonsters();

    $("#settings_character_color").spectrum( {
        preferredFormat: "hex",
        color: settings.character_color
    });

    $("#settings_monster_color").spectrum( {
        preferredFormat: "hex",
        color: settings.monster_color
    });

    $("#settings_monster_hitpoints").prop("checked", settings.random_monster_hitpoints);
});

var settings = {
    monster_color: "sienna",
    character_color: "darkcyan"            
};
var monster_types = [];
var editing_character = "";
var current_combat_type = "";
var current_combat_id = "";
var characters = [];
var monsters = [];
var dead_monsters = [];
var combat_order = [];
var spells = [];
var spells_by_school = [];
var conditions = [];
var skills = [];
var equipment = [];
var tmp_classes = [];
var in_combat = false;

function character() {
    this.id = 0;
    this.type = "character";
    this.player_name = "";
    this.character_name = "";
    this.base_hitpoints = 0;
    this.current_hitpoints = 0;
    this.initiative_bonus = 0;
    this.initiative_advantage = false;
    this.initiative_disadvantage = false;
    this.failed_death_saves = 0;
    this.success_death_saves = 0;
    this.death_save_advantage = false;
    this.death_save_disadvantage = false;
    this.conditions = [];
    this.exhaustion_level = 0;
    this.class = "";
    this.caster_level = 0;
    this.spell_slots = [0,0,0,0,0,0,0,0,0];
    this.used_spell_slots = [0,0,0,0,0,0,0,0,0];
    this.in_combat = true;
}

function monster() {
    this.id = 0;
    this.type = "monster";
    this.monster_name = "";
    this.base_hitpoints = 0;
    this.current_hitpoints = 0;
    this.initiative_bonus = 0;
    this.initiative_advantage = false;
    this.initiative_disadvantage = false;
    this.conditions = [];
    this.api_url = "";
    this.spell_slots = [0,0,0,0,0,0,0,0,0];
    this.used_spell_slots = [0,0,0,0,0,0,0,0,0];
    this.image_url = "";
    this.in_combat = true;
    this.hit_dice = "1d8";
}

function ValidateNumber(input)
{
    if (isNaN($(input).val()))
        $(input).val(0);
}

function SaveEverything()
{
    createCookie("characters", JSON.stringify(characters), 100000000);
    createCookie("monsters", JSON.stringify(monsters), 100000000);
}

function GetClasses()
{
    $.ajax({
        type: "GET",
        url: "/api/classes",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            classes = data.results;
            var html = "";
            for (var x=0; x<classes.length; x++)
            {
                $("#character_class").append("<option value=\"" + classes[x].name + "\">" + classes[x].name + "</option>");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetSkills()
{
    $.ajax({
        type: "GET",
        url: "/api/skills",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            skills = data.results;
            var html = "";
            for (var x=0; x<skills.length; x++)
            {
                $("#ref_skills").append("<option value=\"" + skills[x].url + "\">" + skills[x].name + "</option>");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetEquipment()
{
    $.ajax({
        type: "GET",
        url: "/api/equipment",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            equipment = data.results;
            equipment.sort(
                firstBy(function(v1,v2) { return v1.cat2 - v2.cat2 })
                .thenBy("cat")
                .thenBy("cat2")
                .thenBy("name")
            );
            //equipment.sort(dynamicSort("cat"));
            var cat = "";
            var cat2 = "";
            for (var x=0; x<equipment.length; x++)
            {
                if (cat != equipment[x].cat)
                {
                    $("#ref_equipment").append("<option value=\"\">" + equipment[x].cat + "</option>");
                    cat = equipment[x].cat;   
                }

                if (cat2 != equipment[x].cat2)
                {
                    $("#ref_equipment").append("<option value=\"\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + equipment[x].cat2 + "</option>");
                    cat2 = equipment[x].cat2;   
                }

                $("#ref_equipment").append("<option value=\"" + equipment[x].url + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + equipment[x].name + "</option>");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetConditions()
{
    $.ajax({
        type: "GET",
        url: "/api/conditions",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            conditions = data.results;
            var html = "";
            for (var x=0; x<conditions.length; x++)
            {
                html += "<label><input type=\"checkbox\" value=\"" + conditions[x].name + "\">" + conditions[x].name + "</label>";
                $("#ref_conditions").append("<option value=\"" + conditions[x].url + "\">" + conditions[x].name + "</option>");
            }
            $("#conditions").html(html);
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetSpells()
{
    $.ajax({
        type: "GET",
        url: "/api/spells",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            spells = data.results;
            spells.sort(
                firstBy(function(v1,v2) { return v1.name - v2.name })
                .thenBy("name")
            );

            for (var x=0; x<spells.length; x++)
            {
                $("#ref_spells").append("<option value=\"" + spells[x].url + "\">" + spells[x].name + "</option>");
            }

            spells.sort(
                firstBy(function(v1,v2) { return v1.name - v2.name })
                .thenBy("level")
                .thenBy("name")
            );

            var level = -1;
            for (var x=0; x<spells.length; x++)
            {
                if (level != spells[x].level)
                {
                    $("#ref_spells_by_level").append("<option value=\"\">Level: " + spells[x].level + "</option>");    
                    level = spells[x].level;
                }
                $("#ref_spells_by_level").append("<option value=\"" + spells[x].url + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + spells[x].name + "</option>");
            }


            spells.sort(
                firstBy(function(v1,v2) { return v1.name - v2.name })
                .thenBy("school")
                .thenBy("name")
            )

            var school = "";
            for (var x=0; x<spells.length; x++)
            {
                if (spells[x].school)
                {
                    if (school != spells[x].school)
                    {
                        $("#ref_spells_by_school").append("<option value=\"\">School: " + spells[x].school + "</option>");    
                        school = spells[x].school;
                    }
                    $("#ref_spells_by_school").append("<option value=\"" + spells[x].url + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + spells[x].name + "</option>");
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetMonsterTypes()
{
    $.ajax({
        type: "GET",
        url: "/api/monsters",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            monster_types = data.results;
            monster_types.sort(
                firstBy(function(v1,v2) { return v1.name - v2.name })
                .thenBy("name")
            );
            var html = "";
            var cr = -1;
            for (var x=0; x<monster_types.length; x++)
            {
                html += "<option value=\"" + monster_types[x].url + "\">" + monster_types[x].name + " (CR: " +  monster_types[x].cr + ")</option>";
            }
            $("#monster_types").append(html);
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function SelectMonsterType()
{
    $("#monster_api_url").val($("#monster_types").val());
    if ($("#monster_types").val() == "") return;
    $.ajax({
        type: "GET",
        url: $("#monster_types").val(),
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            $("#monster_name").val(data.name);
            $("#monster_initiative_bonus").val(GetBonus(data.dexterity));
            $("#monster_base_hitpoints").val(data.hit_points);
            $("#monster_hd_qty").val(data.hit_dice.split('d')[0]);
            $("#monster_hd_dice").val(data.hit_dice.split('d')[1]);
            $(".m_spell_slot").val("0");
            if (data.special_abilities)
            {
                for (var x=0; x<data.special_abilities.length; x++)
                {
                    if (data.special_abilities[x].name == "Spellcasting")
                    {
                        if (data.special_abilities[x].desc.indexOf("1st level") > -1)
                        {
                            $("#m_ss_1").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("1st level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("2nd level") > -1)
                        {
                            $("#m_ss_2").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("2nd level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("3rd level") > -1)
                        {
                            $("#m_ss_3").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("3rd level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("4th level") > -1)
                        {
                            $("#m_ss_4").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("4th level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("5th level") > -1)
                        {
                            $("#m_ss_5").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("5th level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("6th level") > -1)
                        {
                            $("#m_ss_6").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("6th level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("7th level") > -1)
                        {
                            $("#m_ss_7").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("7th level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("8th level") > -1)
                        {
                            $("#m_ss_8").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("8th level") + 11, 1));
                        }
                        if (data.special_abilities[x].desc.indexOf("9th level") > -1)
                        {
                            $("#m_ss_9").val(data.special_abilities[x].desc.substr(data.special_abilities[x].desc.indexOf("9th level") + 11, 1));
                        }
                    }
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function DeleteCharacter(id)
{
    if (confirm("this action cannot be undone, are you sure?"))
    {
        for (var x=0; x<characters.length; x++)
        {
            if (characters[x].id == id)
            {
                characters.splice(x, 1);
            }
        }
    }
    SaveEverything();
    RedrawCharacters();
}

function ClearForms()
{
    $("#character_name").val("");
    $("#player_name").val("");
    $("#character_initiative_bonus").val("0");
    $("#character_base_hitpoints").val("0");
    $("#character_initiative_modifier").val("none");
    $(".spell_slot").val("0");
    $(".m_spell_slot").val("0");
    $("#character_class_list").html("Level 0 Commoner");
}

function EditCharacter(id)
{
    editing_character = id;
    for (var x=0; x<characters.length; x++)
    {
        if (characters[x].id == id)
        {
            tmp_classes = characters[x].class;
            DrawCharacterClasses(true);
            $("#character_name").val(characters[x].character_name);
            $("#player_name").val(characters[x].player_name);
            $("#character_initiative_bonus").val(characters[x].initiative_bonus);
            $("#character_base_hitpoints").val(characters[x].base_hitpoints);
            if (characters[x].initiative_advantage)
                $("#character_initiative_modifier").val("adv");
            else if (characters[x].initiative_disadvantage)
                $("#character_initiative_modifier").val("dis");
            else
                $("#character_initiative_modifier").val("none");
            $(".spell_slot").val("0");
            var ss = $(".spell_slot");
            if (characters.spell_slots == null) characters.spell_slots = [];
            for (var y=0; y<characters.spell_slots.length; y++)
            {
                ss[y].val(characters.spell_slots[y]);
            }
        }
    }
    $("#characterModal").modal("show");
}

function AddTempClass()
{
    tmp_classes.push( { "class" : $("#character_class").val(), "level" : $("#character_level").val() });
    DrawCharacterClasses(true);
    GetSpellSlots();
}

function DrawCharacterClasses(usetemp)
{
    var html = "Level 0 Commoner";
    if (tmp_classes == null) tmp_classes = [];
    if (tmp_classes.length > 0)
    {
        html = "";
        for (var x=0; x<tmp_classes.length; x++)
        {
            html += "<div><i style=\"cursor: pointer\" class=\"fa fa-trash-alt\" onclick=\"RemoveTempClass(" + x + ")\"></i> Level " + tmp_classes[x].level + " " + tmp_classes[x].class + "</div>";
        }
    }
    $("#character_class_list").html(html);
}

function RemoveTempClass(index)
{
    tmp_classes.splice(index, 1);
    DrawCharacterClasses();
    GetSpellSlots();
}

function GetSpellSlots()
{
    if (tmp_classes.length == 1)
    {
        $.ajax({
            type: "GET",
            url: "/api/classes/" + tmp_classes[0].class.toLowerCase() + "/level/" + tmp_classes[0].level,
            dataType: "JSON",
            contentType: "application/json; charset=utf-8",
            async: true,
            success: function (data) {
                if (data.spellcasting)
                {
                    $("#ss_1").val(data.spellcasting.spell_slots_level_1);
                    $("#ss_2").val(data.spellcasting.spell_slots_level_2);
                    $("#ss_3").val(data.spellcasting.spell_slots_level_3);
                    $("#ss_4").val(data.spellcasting.spell_slots_level_4);
                    $("#ss_5").val(data.spellcasting.spell_slots_level_5);
                    $("#ss_6").val(data.spellcasting.spell_slots_level_6);
                    $("#ss_7").val(data.spellcasting.spell_slots_level_7);
                    $("#ss_8").val(data.spellcasting.spell_slots_level_8);
                    $("#ss_9").val(data.spellcasting.spell_slots_level_9);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
        });
    }
    else
    {
        var casting_level = 0;
        for (var x=0; x<tmp_classes.length; x++)
        {
            switch (tmp_classes[x].class)
            {
                case "Cleric":
                case "Sorcerer":
                case "Wizard":
                case "Warlock":
                case "Bard":
                case "Druid":
                    casting_level += tmp_classes[x].level - 0;
                    break;
                case "Paladin":
                case "Ranger":
                    casting_level += Math.floor(tmp_classes[x].level/2);
                    break;
            }
        }
        for (var x=0; x<mc_spell_slots.length; x++)
        {
            if (mc_spell_slots[x].level == casting_level)
            {
                $("#ss_1").val(mc_spell_slots[x].ss_1);
                $("#ss_2").val(mc_spell_slots[x].ss_2);
                $("#ss_3").val(mc_spell_slots[x].ss_3);
                $("#ss_4").val(mc_spell_slots[x].ss_4);
                $("#ss_5").val(mc_spell_slots[x].ss_5);
                $("#ss_6").val(mc_spell_slots[x].ss_6);
                $("#ss_7").val(mc_spell_slots[x].ss_7);
                $("#ss_8").val(mc_spell_slots[x].ss_8);
                $("#ss_9").val(mc_spell_slots[x].ss_9);
            }
        }
    }
}

function SaveCharacter()
{
    var ss = $(".spell_slot");
    var sslots = [];
    for (var x=0; x<ss.length; x++)
    {
        sslots.push($(ss[x]).val()-0);
    }

    if (editing_character == "")
    {
        var tmp_char = new character();
        tmp_char.id = guid();
        tmp_char.class = tmp_classes;
        tmp_char.character_name = $("#character_name").val();
        tmp_char.player_name = $("#player_name").val();
        tmp_char.initiative_bonus = $("#character_initiative_bonus").val();
        tmp_char.base_hitpoints = $("#character_base_hitpoints").val();
        tmp_char.current_hitpoints = tmp_char.base_hitpoints;
        if ($("#character_initiative_modifier").val() == "adv")
            tmp_char.initiative_advantage = true;
        if ($("#character_initiative_modifier").val() == "dis")
            tmp_char.initiative_disadvantage = true;
        tmp_char.spell_slots = sslots;
        characters.push(tmp_char);
    }
    else
    {
        for (var x=0; x<characters.length; x++)
        {
            if (characters[x].id == editing_character)
            {
                characters[x].class = tmp_classes;
                characters[x].character_name = $("#character_name").val();
                characters[x].player_name = $("#player_name").val();
                characters[x].initiative_bonus = $("#character_initiative_bonus").val();
                characters[x].base_hitpoints = $("#character_base_hitpoints").val();
                characters[x].current_hitpoints = characters[x].base_hitpoints;
                characters[x].spell_slots = sslots;
                if ($("#character_initiative_modifier").val() == "adv")
                    characters[x].initiative_advantage = true;
                if ($("#character_initiative_modifier").val() == "dis")
                    characters[x].initiative_disadvantage = true;
            }
        }
    }
    editing_character = "";
    RedrawCharacters();
    SaveEverything();
    toastr["info"]("Character Saved");
}

function DeleteMonster(id)
{
    if (confirm("this action cannot be undone, are you sure?"))
    {
        for (var x=0; x<monsters.length; x++)
        {
            if (monsters[x].id == id)
            {
                monsters.splice(x, 1);
            }
        }
    }
    SaveEverything();
    RedrawMonsters();
}

function SaveMonster()
{
    var ss = $(".m_spell_slot");
    var sslots = [];
    for (var x=0; x<ss.length; x++)
    {
        sslots.push($(ss[x]).val()-0);
    }

    for (var x=0; x<$("#monster_quantity").val(); x++)
    {
        var tmp_monster = new monster();
        tmp_monster.id = guid();
        tmp_monster.monster_name = $("#monster_name").val();
        if (x > 0)
            tmp_monster.monster_name += " " + (x + 1);
        tmp_monster.initiative_bonus = $("#monster_initiative_bonus").val();
        tmp_monster.hit_dice = $("#monster_hd_qty").val() + "d" + $("#monster_hd_dice").val();
        tmp_monster.base_hitpoints = $("#monster_base_hitpoints").val();
        if (settings.random_monster_hitpoints)
        {
            tmp_monster.base_hitpoints = RollMultipleDice(tmp_monster.hit_dice);
        }
        tmp_monster.current_hitpoints = tmp_monster.base_hitpoints;
        if ($("#monster_initiative_modifier").val() == "adv")
            tmp_monster.initiative_advantage = true;
        if ($("#monster_initiative_modifier").val() == "dis")
            tmp_monster.initiative_disadvantage = true;
        tmp_monster.api_url = $("#monster_api_url").val();
        tmp_monster.spell_slots = sslots;
        monsters.push(tmp_monster);
    }
    RedrawMonsters();
    SaveEverything();
}

function RedrawCharacters()
{
    characters.sort(dynamicSort("character_name"));
    $("#characters").html("");
    var html = "";
    for (var x=0; x<characters.length; x++)
    {
        html += "<div class=\"character\" style=\"background-color: " + settings.character_color + "\" onclick=\"SelectCharacter('" + characters[x].id + "')\")>" + 
            "<i class=\"fa fa-trash-alt\" onclick=\"DeleteCharacter('" + characters[x].id + "')\")></i> " +
            "<i class=\"fa fa-edit\" onclick=\"EditCharacter('" + characters[x].id + "')\")></i> " + 
            characters[x].character_name + 
            " (" + characters[x].current_hitpoints + "/" + characters[x].base_hitpoints + ")";
            if (characters[x].in_combat)
            {
                html += "<i style=\"color: white; float: right; margin-top: 3px; margin-left: 4px;\" class=\"fa fa-shield-alt\" onclick=\"ToggleCharacterCombat(this,'" + characters[x].id + "')\")></i> ";
            }
            else
            {
                html += "<i style=\"color: grey; float: right; margin-top: 3px; margin-left: 4px;\" class=\"fa fa-shield-alt\" onclick=\"ToggleCharacterCombat(this,'" + characters[x].id + "')\")></i> ";
            }
            html += "<i style=\"float: right; margin-top: 3px;\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('character','" + characters[x].id + "')\")></i> " + 
            "</div>";
    }
    $("#characters").html(html);
}

function RedrawMonsters()
{
    characters.sort(dynamicSort("monster_name"));
    $("#monsters").html("");
    var html = "";
    for (var x=0; x<monsters.length; x++)
    {
        html += "<div class=\"monster\" style=\"background-color: " + settings.monster_color + "\" onclick=\"SelectMonster('" + monsters[x].id + "')\")>";
        if (monsters[x].in_combat)
        {
            html += "<i style=\"color: white; float: right; margin-top: 3px; margin-left: 4px;\" class=\"fa fa-shield-alt\" onclick=\"ToggleMonsterCombat(this,'" + monsters[x].id + "')\")></i> ";
        }
        else
        {
            html += "<i style=\"color: grey; float: right; margin-top: 3px; margin-left: 4px;\" class=\"fa fa-shield-alt\" onclick=\"ToggleMonsterCombat(this,'" + monsters[x].id + "')\")></i> ";
        }
        html += "<i class=\"fa fa-trash-alt\" onclick=\"DeleteMonster('" + monsters[x].id + "')\")></i> " +
            monsters[x].monster_name + 
            " (" + monsters[x].current_hitpoints + "/" + monsters[x].base_hitpoints + ")" + 
            "<i style=\"float: right; margin-top: 3px;\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('monster','" + monsters[x].id + "')\")></i> " + 
            "</div>";
    }
    $("#monsters").html(html);
}

function ToggleCharacterCombat(icon, id)
{
    for (var x=0; x<characters.length; x++)
    {
        if (characters[x].id == id)
        {
            characters[x].in_combat = !characters[x].in_combat;
        }        
    }
    RedrawCharacters();
    SaveEverything();
}

function ToggleMonsterCombat(icon, id)
{
    for (var x=0; x<monsters.length; x++)
    {
        if (monsters[x].id == id)
        {
            monsters[x].in_combat = !monsters[x].in_combat;
        }        
    }
    RedrawMonsters();
    SaveEverything();
}

function DrawCharacters()
{
    $("#combat_order").html("");
    var html = "";
    for (var x=0; x<characters.length; x++)
    {
        html += "<div class=\"character\" style=\"background-color: " + settings.character_color + "\" onclick=\"SelectCharacter('" + characters[x].id + "')\">" + characters[x].character_name;
        html += "<i style=\"float: right; margin-top: 6px;\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('character','" + characters[x].id + "')\")></i> " ;
        html += "<span style=\"float: right; margin-right: 3px;\"> (" + characters[x].current_hitpoints + "/" + characters[x].base_hitpoints + ")</span>";
        html += "</div>";
    }
    $("#combat_order").html(html);
}

function RollInitiative(reroll)
{
    if ((characters.length == 0) && (monsters.length == 0))
    {
        toastr["warning"]("Add some characters and monsters before rolling initiative.");
        return;
    }

    if (reroll)
    {
        in_combat = true;
        combat_order = [];
        for (var x=0; x<characters.length; x++)
        {
            var adj_init = RollDice(20, characters[x].initiative_advantage, characters[x].initiative_disadvantage) + (characters[x].initiative_bonus - 0);
            combat_order.push( { entity : characters[x], init: adj_init });
        }

        for (var x=0; x<monsters.length; x++)
        {
            var adj_init = RollDice(20, monsters[x].initiative_advantage, monsters[x].initiative_disadvantage) + (monsters[x].initiative_bonus - 0);
            combat_order.push( { entity : monsters[x], init: adj_init });
        }

        combat_order.sort(dynamicSort("init"));
    }

    if (!in_combat) { 
        DrawCharacters();
        return;
    }

    $("#combat_order").html("");
    var html = "";
    for (var x=combat_order.length-1; x>=0; x--)
    {
        if (combat_order[x].entity.in_combat)
        {
            if (combat_order[x].entity.type == "character") {
                html += "<div class=\"character\" style=\"background-color: " + settings.character_color + "\" onclick=\"SelectCharacter('" + combat_order[x].entity.id + "')\">" + combat_order[x].entity.character_name + " (" + combat_order[x].init + ")";
                html += "<i style=\"float: right; margin-top: 6px;\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('character','" + combat_order[x].entity.id + "')\")></i> " ;
                html += "<span style=\"float: right; margin-right: 3px;\"> (" + combat_order[x].entity.current_hitpoints + "/" + combat_order[x].entity.base_hitpoints + ")</span>";
                html += "</div>";
            }
            else
            {
                if (combat_order[x].entity.current_hitpoints > 0)
                {
                    html += "<div class=\"monster\" style=\"background-color: " + settings.monster_color + "\" onclick=\"SelectMonster('" + combat_order[x].entity.id + "')\">" + combat_order[x].entity.monster_name + " (" + combat_order[x].init + ")";
                    html += "<i style=\"float: right; margin-top: 6px;\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('monster','" + combat_order[x].entity.id + "')\")></i> " ;
                    html += "<span style=\"float: right; margin-right: 3px;\"> (" + combat_order[x].entity.current_hitpoints + "/" + combat_order[x].entity.base_hitpoints + ")</span>";
                    html += "</div>";
                }
            }
        }
    }
    $("#combat_order").html(html);
}

function OpenCombatWindow(type, id)
{
    $("#conditions input[type=checkbox]").prop("checked", false);
    current_combat_type = type;
    current_combat_id = id;
    if (type == "character")
    {
        for (var x=0; x<characters.length; x++)
        {
            if (characters[x].id == id)
            {
                MarkConditions(characters[x]);
            }
        }
    }
    if (type == "monster")
    {
        for (var x=0; x<monsters.length; x++)
        {
            if (monsters[x].id == id)
            {
                MarkConditions(monsters[x]);
            }
        }
    }
    $("#combat_damage_taken").val(0);
    $("#combat_healing_recieved").val(0);
    $("#combatModal").modal("show");
    return false;
}

function Kill()
{
    if (current_combat_type == "character")
    {
        for (var x=0; x<characters.length; x++)
        {
            if (characters[x].id == current_combat_id)
            {
                $("#combat_damage_taken").val(characters[x].base_hitpoints);
            }
        }
    }

    if (current_combat_type == "monster")
    {
        for (var x=0; x<monsters.length; x++)
        {
            if (monsters[x].id == current_combat_id)
            {
                $("#combat_damage_taken").val(monsters[x].base_hitpoints);
            }
        }
    }
}

function HealToMax()
{
    if (current_combat_type == "character")
    {
        for (var x=0; x<characters.length; x++)
        {
            if (characters[x].id == current_combat_id)
            {
                $("#combat_healing_recieved").val(characters[x].base_hitpoints);
            }
        }
    }

    if (current_combat_type == "monster")
    {
        for (var x=0; x<monsters.length; x++)
        {
            if (monsters[x].id == current_combat_id)
            {
                $("#combat_healing_recieved").val(monsters[x].base_hitpoints);
            }
        }
    }
}

function ApplyCombat()
{
    if (current_combat_type == "character")
    {
        for (var x=0; x<characters.length; x++)
        {
            if (characters[x].id == current_combat_id)
            {
                characters[x].current_hitpoints = characters[x].current_hitpoints - $("#combat_damage_taken").val();
                characters[x].current_hitpoints = characters[x].current_hitpoints + ($("#combat_healing_recieved").val() - 0);
                if (characters[x].current_hitpoints < 0) characters[x].current_hitpoints = 0;
                if (characters[x].current_hitpoints > characters[x].base_hitpoints) characters[x].current_hitpoints = characters[x].base_hitpoints;
                ApplyConditions(characters[x]);
                RedrawCharacters();
                SaveEverything();
                SelectCharacter(characters[x].id);
            }
        }
    }

    if (current_combat_type == "monster")
    {
        for (var x=0; x<monsters.length; x++)
        {
            if (monsters[x].id == current_combat_id)
            {
                monsters[x].current_hitpoints = monsters[x].current_hitpoints - $("#combat_damage_taken").val();
                monsters[x].current_hitpoints = monsters[x].current_hitpoints + ($("#combat_healing_recieved").val() - 0);
                if (monsters[x].current_hitpoints < 0) monsters[x].current_hitpoints = 0;
                if (monsters[x].current_hitpoints > monsters[x].base_hitpoints) monsters[x].current_hitpoints = monsters[x].base_hitpoints;
                ApplyConditions(monsters[x]);
                RedrawMonsters();
                SaveEverything();
                SelectMonster(monsters[x].id);
            }
        }
    }

    current_combat_type = "";
    current_combat_id = "";
    RollInitiative(false);
}

function EndCombat()
{
    in_combat = false;
    DrawCharacters();
}

function ShortRest()
{

}

function LongRest()
{
    for (var x=0; x<characters.length; x++)
    {
        characters[x].current_hitpoints = characters[x].base_hitpoints;
        characters[x].used_spell_slots = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    }
    DrawCharacters();
}

function ToggleCondition(icon)
{
    if ($(icon).hasClass("condition_on"))
    {
        $(icon).removeClass("condition_on");
    }
    else
    {
        $(icon).addClass("condition_on");
    }
}

function MarkConditions(entity)
{
    for (var x=0; x<entity.conditions.length; x++)
    {
        $("#conditions input[type=checkbox][value=" + entity.conditions[x] + "]").prop("checked", true);
    }
}

function ApplyConditions(entity)
{
    var checked = $("#conditions input[type=checkbox]:checked");
    var conds = [];
    for (var x=0; x<checked.length; x++)
    {
        conds.push($(checked[x]).val());
    }
    entity.conditions = conds;
}

function SelectCharacter(id)
{
    $("#stats_desc").html("");
    $("#actions_desc").html("");
    for (var x=0; x<characters.length; x++)
    {
        if (characters[x].id == id)
        {
            $("#selected_name").html("<i style=\"cursor: pointer\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('character','" + id + "')\")></i> " + characters[x].character_name);
            WriteConditions(characters[x].conditions);
            var html = "Level 0 Commoner";
            if (characters[x].class != null)
            {
                html = "";
                for (var y=0; y<characters[x].class.length; y++)
                {
                    html += "Level " + characters[x].class[y].level + " " + characters[x].class[y].class + "<br />";
                }
            }
            $("#selected_name").append("<br /><a class=\"subnote\">" + html + "</a>");
        }
    }
}

function SelectMonster(id)
{
    $("#stats_desc").html("");
    $("#actions_desc").html("");
    for (var x=0; x<monsters.length; x++)
    {
        if (monsters[x].id == id)
        {
            $("#selected_name").html("<i style=\"cursor: pointer\" class=\"fa fa-crosshairs\" onclick=\"OpenCombatWindow('monster','" + id + "')\")></i> " + monsters[x].monster_name);
            WriteConditions(monsters[x].conditions);
            if (monsters[x].api_url != "")
            {
                GetMonsterDetails(monsters[x].api_url);
            }
        }
    }
}

function WriteConditions(conds)
{
    var html = "";
    for (var x=0; x<conds.length; x++)
    {
        for (var y=0; y<conditions.length; y++)
        {
            if (conditions[y].name == conds[x])
            {
                html += "<a href=\"javascript:GetConditionText('" + conditions[y].url + "')\">" + conds[x] + "</a>";
            }
        }
    }
    $("#selected_conditions").html(html);
}

function GetConditionText(url)
{
    if (url == "") url = $("#ref_conditions").val();
    if (url == "") return;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            $("#ref_page").html(data.page);
            $("#referenceModalTitle").html(data.name);
            var html = "<ul>";
            for (var x=0; x<data.desc.length; x++)
            {
                html += "<li>" + data.desc[x].replace(/• /g,'') + "</li>";
            }
            html += "</ul>";
            $("#reference_details").html(html);
            $("#referenceDetails").modal("show");
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetSkillText(url)
{
    if (url == "") url = $("#ref_skills").val();
    if (url == "") return;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            $("#ref_page").html(data.page);
            $("#referenceModalTitle").html(data.name);
            var html = "<div><b>Ability: " + data.ability_score.name + "</b></div>";
            html += "<ul>";
            for (var x=0; x<data.desc.length; x++)
            {
                html += "<li>" + data.desc[x].replace(/• /g,'') + "</li>";
            }
            html += "</ul>";
            $("#reference_details").html(html);
            $("#referenceDetails").modal("show");
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetEquipmentText(url)
{
    if (url == "") url = $("#ref_equipment").val();
    if (url == "") return;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            $("#referenceModalTitle").html(data.name);
            $("#ref_page").html(data.page);
            var html = "";
            html += "<div style=\"display: inline-block; width: 45%\">Category: " + data.equipment_category + "</div>";
            if (data.weight) html += "<div style=\"display: inline-block; width: 45%\">Weight: " + data.weight + " lbs</div>";
            html += "<div style=\"display: inline-block; width: 45%\">Cost: " + data.cost.quantity + " " + data.cost.unit + "</div>";
            if (data.gear_category) html += "<div style=\"display: inline-block; width: 45%\">Type: " + data.gear_category + "</div>";
            if (data.category_range) html += "<div style=\"display: inline-block; width: 45%\">Type: " + data.category_range + "</div>";                        
            if (data.damage) html += "<div style=\"display: inline-block; width: 45%\">Damage: " + data.damage.dice_count + "d" + data.damage.dice_value + " (" + data.damage.damage_type.name + ")</div>";
            if (data.range) html += "<div style=\"display: inline-block; width: 45%\">Range: " + data.range.normal + " / " + data.range.long + "</div>";
            if (data.throw_range) html += "<div style=\"display: inline-block; width: 45%\">Throw Range: " + data.throw_range.normal + " / " + data.throw_range.long + "</div>";
            if (data.armor_category) html += "<div style=\"display: inline-block; width: 45%\">Type: " + data.armor_category + "</div>";   
            if (data.armor_class) html += "<div style=\"display: inline-block; width: 45%\">Armor Class: " + data.armor_class.base + "</div>"; 
            if (data.desc) {
                for (var x=0; x<data.desc.length; x++)
                {
                    html += "<li>" + data.desc[x].replace(/• /g,'') + "</li>";
                }  
            }
            if (data.properties)
            {
                html += "<div style=\"display: inline-block; width: 45%\">Properties: "
                for (var x=0; x<data.properties.length; x++) {
                    html += "<a>" + data.properties[x].name + "</a> ";
                }
                html += "</div>";
            }
            $("#reference_details").html(html);
            $("#referenceDetails").modal("show");
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function GetMonsterDetails(url)
{
    if (url == "") return;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            $("#selected_name").append("<br /><a class=\"subnote\">" + data.size + " " + data.type + ", " + data.alignment + "</a>");
            var html = "<a class=\"subnote\">";
            html += "STR: " + data.strength + " (" + GetBonus(data.strength) + ") ";
            html += "DEX: " + data.dexterity + " (" + GetBonus(data.dexterity) + ") ";
            html += "CON: " + data.constitution + " (" + GetBonus(data.constitution) + ")<br />";
            html += "INT: " + data.intelligence + " (" + GetBonus(data.intelligence) + ") ";
            html += "WIS: " + data.wisdom + " (" + GetBonus(data.wisdom) + ") ";
            if (data.charisma) html += "CHA: " + data.charisma + " (" + GetBonus(data.charisma) + ") ";
            html += "<hr />";
            html += "Armor Class: " + data.armor_class + "<br />";
            html += "Hit Points: " + data.hit_points + "<br />";
            html += "Speed: " + data.speed + "<br />";
            html += "<hr />";

            html += "Immune: " + data.damage_immunities + "<br />";
            html += "Cond. Immune: " + data.condition_immunities + "<br />";
            html += "Resists: " + data.damage_resistances + "<br />";
            html += "Vulnerable: " + data.damage_vulnerabilities + "<br />";

            html += "<hr />";

            if (data.special_abilities)
            {
                for (var x=0; x<data.special_abilities.length; x++)
                {
                    data.special_abilities[x].desc = data.special_abilities[x].desc.replace(/• /g, "<li>");
                    html += "<b>" + data.special_abilities[x].name + "</b/><br />";
                    html += "<div style=\"padding-left: 8px; padding-bottom: 8px; font-size: small;\">" + FindSpells(data.special_abilities[x].desc) + "</div>";
                }
            }
            
            html += "</a>";
            $("#stats_desc").html(html);

            html = "<a class=\"subnote\">";
            if (data.actions) {
                html += "<div><b>Actions</b></div>";
                for (var x=0; x<data.actions.length; x++)
                {
                    data.actions[x].desc = data.actions[x].desc.replace(/• /g, "<li>");
                    html += "<b>" + data.actions[x].name + "</b/><br />";
                    html += "<div style=\"padding-left: 8px; padding-bottom: 8px; font-size: small;\">" + FindSpells(data.actions[x].desc) + "</div>";
                }
            }

            if (data.legendary_actions) {
                html += "<div><b>Legendary Actions</b></div>";
                for (var x=0; x<data.legendary_actions.length; x++)
                {
                    data.legendary_actions[x].desc = data.legendary_actions[x].desc.replace(/• /g, "<li>");
                    html += "<b>" + data.legendary_actions[x].name + "</b/><br />";
                    html += "<div style=\"padding-left: 8px; padding-bottom: 8px; font-size: small;\">" + FindSpells(data.legendary_actions[x].desc) + "</div>";
                }
            }

            html += "</a>";
            $("#actions_desc").html(html);
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function FindSpells(desc)
{
    var lower_case = desc.toLowerCase();
    var spells_found = [];
    for (var x=0; x<spells.length; x++)
    {
        var find = spells[x].name;
        var regex = new RegExp(find, "gi");
        desc = desc.replace(regex, "<a href=\"javascript:GetSpellDetails('" + spells[x].url + "')\">" + spells[x].name + "</a>");
    }
    return desc;
}

function GetSpellDetailsBySchool() {
    GetSpellDetails($("#ref_spells_by_school").val());
}

function GetSpellDetailsByLevel() {
    GetSpellDetails($("#ref_spells_by_level").val());
}

function GetSpellDetails(url)
{
    if (url == "") url = $("#ref_spells").val();
    if (url == "") return;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            $("#referenceModalTitle").html(data.name);
            $("#ref_page").html(data.page);
            var html = "";
            html += "<div style=\"display: inline-block; width: 45%\">Level: " + data.level + "</div>";
            html += "<div style=\"display: inline-block; width: 45%\">Concentration: " + data.concentration + "</div>";
            html += "<div style=\"display: inline-block; width: 45%\">Casting Time: " + data.casting_time + "</div>";
            html += "<div style=\"display: inline-block; width: 45%\">Duration: " + data.duration + "</div>";
            html += "<div style=\"display: inline-block; width: 45%\">Range: " + data.range + "</div>";
            html += "<div style=\"display: inline-block; width: 45%\">Components: " + data.components + "</div>";
            if (data.material) html += "<div>Materials: " + data.material.replace(/â€™/g,'\'') + "</div>";
            html += "<hr />";
            for (var x=0; x<data.desc.length; x++)
            {
                html += "<div>" + data.desc[x].toString().replace(/â€™/g,'\'').replace(/- /g,"<li>") + "</div>";
            }                        
            if (data.higher_level) html += "<br /><div>" + data.higher_level + "</div>";
            $("#reference_details").html(html);
            $("#referenceDetails").modal("show");
        },
        error: function (jqXHR, textStatus, errorThrown) { alert("this broke"); }
    });
}

function UpdateSettings()
{
    settings.character_color = $("#settings_character_color").val();
    settings.monster_color = $("#settings_monster_color").val();
    settings.random_monster_hitpoints = $("#settings_monster_hitpoints").is(":checked");
    createCookie("settings", JSON.stringify(settings), 100000000);
    RedrawCharacters();
    RedrawMonsters();
}