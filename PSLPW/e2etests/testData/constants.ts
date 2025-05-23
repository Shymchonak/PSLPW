
export class Login  {

    BASE_URL = "https://staging.pasalo.pro/";
    VALID_EMAIL = "shymnakjob+1000@gmail.com";
    VALID_PASSWORD = "V1@chaslau";
    INVALID_EMAIL = "invalidemail@gmail.com";
    INVALID_PASSWORDS = "InvalidPassword";
    NOTIFICAION_MESSAGE = "something went"
}

export class Urls {
    CUSTOM_FIELDS = '/custom-fields'
    MANAGE = '/communities/manage'
}
export class Dashboard {

    logoutButton = 'Logout'
    POSTED_TASKS = 'Posted task'
    FOR_LOGIN_CHECK = '//div[@class=\'dashboard-header-redesign__top-wrapper\']//div[contains(text(), "Posted tasks")]'
}

export class CommunityDetails {

    COMMUNITY_DETAILS_NAME = 'Community details test'
    UPDATED_COMMUNITY_DETAILS_NAME = 'Community details test UPD'
    NEW_COMMUNITY_DESCRIPTION = 'Some words for new community'
    COMMUNITY_DESCRIPTON_EDITED = 'Totaly new text UPD'
    COMMUNITY_UPDATE = "Community updated!"
    STATUS_CREATED = "Status created!"
    STATUS_UPDATED = "Status updated!"
    STATUS_DELETED = "Status deleted!"
    TASK_TYPE_CREATED ="Task type created!"
    TASK_TYPE_UPDATE = "Task type updated!"
    TASK_TYPE_DELETED = "Task type deleted!"
    SUBTYPE_CREATED = "Task sub-type created!"
}

export class CustomTaskStatuses {
    COMMUNITY_TASK_STATUS_TEST = 'Task statuses'
    PARENT_STATUS_PENDING = "Pending"
    PARENT_STATUS_INPROGRESS = "In progress"
    PARENT_STATUS_COMPLETED = "Completed"
    COLOR_FOR_PARENT_PENDING = "rgb(0, 202, 249)"
    COLOR_FOR_PARENT_INPROGRESS = "rgb(255, 158, 84)"
    COLOR_FOR_PARENT_COMPLETED = "rgb(0, 128, 0)"
    CUSTOM_TASK_STATUS_PENDING_NAME = "Custom Auto PENDING"
    CUSTOM_TASK_STATUS_PENDING_NAME_EDITED = "Custom Auto PENDING UPD"
    CUSTOM_TASK_STATUS_INPROGRESS_NAME = "Custom Auto INPROGRESS"
    CUSTOM_TASK_STATUS_INPROGRESS_NAME_EDITED = "Custom Auto INPROGRESS UPD"
    CUSTOM_TASK_STATUS_COMPLETED_NAME = "Custom Auto COMPLETED"
    CUSTOM_TASK_STATUS_COMPLETED_NAME_EDITED = "Custom Auto COMPLETED UPD"
}

export class TaskTypes {
    COMMUNITY_TASK_TYPE_NAME = "Task types"
    TYPE_WITHOUT_SUBTYPE_NAME = "Type without sub-type"
    TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME = "Type with sub-type without TIMER"
    TYPE_WITH_SUBTYPE_WITH_TIMER_NAME = "Type with sub-type WITH TIMER"
    TYPE_WITHOUT_SUBTYPE_NAME_EDITED = "Type without sub-type UPD"
    TYPE_WITH_SUBTYPE_NAME_EDITED = "Type with sub-type UPD"
    TYPE_WITH_MULTIPLE_SUBTYPES = "Type with multiple subtype"

    SUBTYPE_WITHOUT_TIMER = "Subtype without TIMER"
    SUBTYPE_WITHOUT_TIMER_EDITED = "Subtype without TIMER UPD"

    SUBTYPE_WITH_TIMER = "Subtype with TIMER"
    SUBTYPE_WITH_TIMER_EDITED = "Subtype with TIMER UPD"

    SUBTYPE_MULTIPLE_COLLECTION_FIRST = 'Subtype FIRST without TIMER'
    SUBTYPE_MULTIPLE_COLLECTION_SECOND = 'Subtype SECOND with TIMER'

    ICON_ID_BUG_TWO_FILL = "bug-2-fill"
    ICON_ID_BUG_TWO_LINE = "bug-2-line"
    ICON_ID_BUG_FILL = "bug-fill"
    ICON_ID_BUG_LINE = "bug-line"
    ICON_CATEGORY = 'select[name="categoryIcon"]'
    ICON_CATEGORY_SELECTION = "Development"
    TIME_PERIOD_MINUTES = "Minutes"
    TIME_PERIOD_HOURS = "Hours"
    TIME_PERIOD_DAYS = "Days"
    TIME_AMOUNT_VALUE = "25"
    TIME_AMOUNT_VALUE_EDITED = "27"

}

