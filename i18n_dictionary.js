/**
 * i18n Dictionary — Me Money
 * ใช้งาน: เรียก t('key') เพื่อดึงข้อความตามภาษาปัจจุบัน
 * สลับภาษา: setLang('en') หรือ setLang('th')
 */
var i18nDict = {

  /* ─────────────────────────────────────────
     ภาษาไทย (th) — ค่าเริ่มต้น
  ───────────────────────────────────────── */
  th: {
    // Page / App identity
    page_title: 'เงินฉัน - บัญชีส่วนตัว',
    app_title: 'เงินฉัน',
    header_money_of: 'เงินของ ',

    // Splash screen
    splash_tagline: 'บัญชีส่วนตัว · จัดการการเงินง่ายๆ',
    splash_loading: 'กำลังโหลด',
    splash_step_1: 'กำลังเริ่มต้นระบบ',
    splash_step_2: 'โหลดข้อมูลบัญชี',
    splash_step_3: 'เตรียมกราฟ & AI',
    splash_step_4: 'ตรวจสอบรายการ',
    splash_step_5: 'เกือบพร้อมแล้ว',
    splash_step_6: 'พร้อมใช้งาน! ✨',

    // Toast default titles
    toast_success_title: 'สำเร็จ',
    toast_error_title: 'เกิดข้อผิดพลาด',
    toast_warning_title: 'แจ้งเตือน',
    toast_info_title: 'ข้อมูล',

    // Confirm dialog defaults
    confirm_default_title: 'ยืนยันการดำเนินการ',
    confirm_default_msg: 'คุณต้องการดำเนินการนี้หรือไม่?',

    // Common buttons
    btn_cancel: 'ยกเลิก',
    btn_confirm: 'ยืนยัน',
    btn_save: 'บันทึก',
    btn_edit: 'แก้ไข',
    btn_delete: 'ลบ',
    btn_back: 'กลับ',

    // Done / Success overlay
    msg_done: 'เรียบร้อย!',

    // Persona modal
    title_select_persona: 'เลือกบุคลิก AI',

    // Voice overlay
    voice_listening: 'กำลังฟัง...',
    voice_processing: 'กำลังประมวลผล...',
    voice_guide_html: '💡 <b>เคล็ดลับ:</b><br>"[ประเภท] [หมวด] [รายละเอียด] [จำนวน]"<br><br><i>เช่น: "รายจ่าย หมวดอาหาร ข้าวผัด 50 บาท"</i>',
    btn_voice_cancel: 'ยกเลิก',

    // PIN screen
    pin_enter_title: 'ใส่รหัส PIN',

    // Header / Account
    default_account_name: 'กระเป๋าหลัก',
    select_account: 'เลือกบัญชี',

    // Region setup
    region_overlay_title: 'เลือกภูมิภาค',
    region_overlay_subtitle: 'ตั้งค่าภาษาและสกุลเงินเริ่มต้น',
    settings_select_region: 'เลือกเซิร์ฟเวอร์ / Region',
    currency_symbol: '฿',
    currency_code: 'THB',

    // ── Dashboard ──────────────────────────
    label_net_balance: 'เงินคงเหลือสุทธิ (พร้อมใช้)',
    label_income_this_month: 'รายรับเดือนนี้',
    label_expense_this_month: 'รายจ่ายเดือนนี้',
    chart_title_expense_ratio: 'สัดส่วนรายจ่าย',
    chart_tab_doughnut: 'วงกลม',
    chart_tab_line: 'กราฟ',
    ai_section_title: 'AI วิเคราะห์การเงิน',
    btn_run_ai: 'เริ่มประเมินบัญชีนี้',
    ai_analyzing: 'AI กำลังวิเคราะห์...',
    ai_rank_default: 'ยศ: -',
    goal_label_saved: 'ออมแล้ว: ',
    goal_label_target: 'เป้าหมาย: ',
    btn_complete_goal: '🎉 ยืนยันรับความสำเร็จ!',

    // ── Add tab ────────────────────────────
    tab_add_normal: 'บันทึกปกติ',
    tab_add_saving: 'ออมเงิน',
    btn_voice_input: 'จดบัญชีด้วยเสียง (AI)',
    form_title_new_record: 'บันทึกรายการใหม่',
    form_title_edit_record: 'แก้ไขรายการ',
    label_type: 'ประเภท',
    option_expense: 'รายจ่าย',
    option_income: 'รายรับ',
    label_category: 'หมวดหมู่',
    placeholder_category_name: 'ตั้งชื่อหมวดหมู่...',
    label_detail: 'รายละเอียด',
    placeholder_detail: 'ระบุรายละเอียด...',
    label_amount: 'จำนวนเงิน (฿)',
    label_amount_short: 'จำนวนเงิน',
    label_date: 'วันที่',
    label_recurring: 'รายการประจำ (Auto ทุกเดือน)',
    btn_save_data: 'บันทึกข้อมูล',
    btn_cancel_edit: 'ยกเลิกการแก้ไข',

    // Saving section
    title_set_saving_goal: 'ตั้งเป้าหมายออมเงิน',
    label_goal_name: 'ชื่อเป้าหมาย',
    placeholder_goal_name: 'ทริปญี่ปุ่น, ไอโฟน...',
    label_goal_amount: 'ยอดเงินที่ต้องการ (฿)',
    btn_create_piggy_bank: 'สร้างกระปุกออมสิน',
    btn_cancel_goal: 'ยกเลิกเป้าหมาย',
    label_saved_so_far: 'ออมแล้ว:',
    label_goal_target_short: 'เป้า:',
    title_add_to_piggy: 'หยอดกระปุกเพิ่ม 🪙',
    btn_save_saving: 'บันทึกการออม',
    btn_cancel_saving_edit: 'ยกเลิก',
    default_saving_detail: 'หยอดกระปุก',
    default_saving_category: 'ออมเงิน',

    // ── History tab ────────────────────────
    title_history: 'ประวัติรายการ',
    tab_hist_normal: 'ปกติ',
    tab_hist_saving: 'ออมสิน',
    placeholder_search: 'ค้นหา...',
    label_goal_prefix: 'เป้าหมาย: ',
    recurring_tag: 'ประจำ',
    btn_edit_item: 'แก้ไข',
    btn_delete_item: 'ลบ',
    empty_no_data: 'ไม่พบรายการ',

    // ── Budget tab ─────────────────────────
    title_monthly_budget: 'งบประมาณรายเดือน',
    placeholder_budget_amount: 'จำนวนเงิน',
    btn_add_budget: 'เพิ่มงบประมาณ',
    empty_no_budget: 'ยังไม่มีการตั้งค่างบประมาณ',
    budget_over_prefix: 'เกินงบ ',
    budget_remaining_prefix: 'เหลือ ',

    // ── Settings (main) ────────────────────
    title_settings: 'ตั้งค่า',
    default_username: 'ผู้ใช้งาน',
    default_profile_bio: 'เป้าหมายทางการเงิน...',
    settings_manage_accounts: 'จัดการบัญชี & สลับบัญชี',
    settings_edit_profile: 'แก้ไขโปรไฟล์',
    settings_pin_lock: 'รหัสล็อค PIN',
    settings_dark_mode: 'โหมดกลางคืน',
    settings_export_csv: 'ส่งออก CSV',
    settings_import_csv: 'นำเข้า CSV',
    settings_real_ai: 'ใช้ AI สมองจริง (ออนไลน์)',
    settings_api_key: 'ตั้งค่า API Key (สมอง AI)',

    // Settings — edit profile
    title_edit_profile: 'แก้ไขโปรไฟล์',
    label_username: 'ชื่อผู้ใช้งาน',
    placeholder_your_name: 'ใส่ชื่อของคุณ...',
    label_bio: 'คำอธิบาย',
    placeholder_bio: 'เป้าหมายปีนี้...',
    label_ai_persona: 'บุคลิกของ AI (ผู้ช่วยวิเคราะห์)',
    btn_select_persona: '🤖 เลือกบุคลิก',

    // Settings — PIN
    title_pin_settings: 'รหัสผ่าน (PIN)',
    label_enable_pin: 'เปิดใช้งาน PIN',
    label_set_pin: 'ตั้งรหัส 4 หลัก',
    btn_save_pin: 'บันทึกรหัส',

    // Settings — accounts
    title_your_accounts: 'บัญชีของคุณ',
    title_add_new_account: '+ เพิ่มบัญชีใหม่',
    label_account_name: 'ชื่อบัญชี',
    placeholder_account_name: 'เช่น เงินสด, ธนาคาร A',
    label_account_type: 'ประเภท',
    option_cash: 'เงินสด',
    option_bank: 'ธนาคาร',
    option_credit_card: 'บัตรเครดิต',
    option_other: 'อื่นๆ',
    placeholder_account_detail: 'ไว้จ่ายค่า...',
    btn_create_account: 'สร้างบัญชี',
    tooltip_clear_acc: 'ล้างรายการ',
    tooltip_del_acc: 'ลบบัญชี',

    // Settings — API Key
    title_ai_brain_settings: 'ตั้งค่าระบบสมอง AI',
    api_why_title: '🤔 ทำไมต้องใส่ API Key เอง?',
    api_why_desc: 'เพื่อความ <b>ปลอดภัยขั้นสุด</b>! แอปนี้ทำงานแบบ Offline 100% (ไม่มีระบบหลังบ้านคอยแอบดูข้อมูล) การใส่คีย์ของคุณเองจะทำให้ไม่มีใครรู้ข้อมูลการเงินคุณ และป้องกันคนอื่นขโมยโควต้า AI ไปใช้ครับ',
    api_how_to_title: '🛠️ วิธีรับ API Key ของ Groq (ฟรีและเร็วมาก)',
    api_step_1: 'ไปที่เว็บ',
    api_step_2: 'ล็อกอินด้วยบัญชี Gmail',
    api_step_3: 'กดปุ่ม <b>Create API key</b>',
    api_step_4: 'คัดลอกรหัส (ที่ขึ้นต้นด้วย gsk_) มาวางด้านล่างนี้ได้เลย',
    label_api_key: 'รหัส API Key ของคุณ',
    btn_save_api_key: '💾 บันทึก API Key',

    // Bottom nav
    nav_overview: 'ภาพรวม',
    nav_add: 'บันทึก',
    nav_history: 'รายการ',
    nav_budget: 'งบประมาณ',

    // ── JS Toast / Confirm messages ────────

    // PIN
    msg_pin_disabled: 'ปิดระบบล็อค PIN แล้ว',
    msg_pin_invalid: 'กรุณาตั้งรหัสเป็นตัวเลข 4 หลักเท่านั้น',
    title_pin_invalid: 'PIN ไม่ถูกต้อง',
    msg_pin_saved: 'บันทึกรหัส PIN สำเร็จ ใช้ได้ตั้งแต่เปิดแอปครั้งถัดไป',

    // Account management
    msg_clear_acc_title: 'ล้างรายการในบัญชีนี้?',
    msg_clear_acc_msg: 'ยอดเงินจะกลับเป็น 0 แต่ชื่อบัญชียังอยู่ ไม่สามารถกู้คืนได้',
    btn_clear_data: 'ล้างข้อมูล',
    msg_acc_cleared: 'ล้างรายการเรียบร้อยแล้ว',
    msg_del_acc_title: 'ลบบัญชีนี้?',
    msg_del_acc_msg: 'รายการทั้งหมดในบัญชีจะหายไปถาวร ไม่สามารถกู้คืนได้',
    btn_delete_acc: 'ลบบัญชี',
    msg_acc_deleted: 'ลบบัญชีเรียบร้อยแล้ว',
    msg_cant_del_last_acc: 'ไม่สามารถลบบัญชีสุดท้ายได้ครับ',
    msg_acc_name_required: 'กรุณาตั้งชื่อบัญชีด้วยครับ',

    // Voice
    msg_voice_not_supported: 'เบราว์เซอร์ไม่รองรับ แนะนำ Chrome/Safari',
    title_voice_not_supported: 'ไม่รองรับ Voice',
    msg_voice_error_prefix: 'เกิดข้อผิดพลาด: ',
    msg_voice_heard_prefix: 'AI ได้ยินว่า: "',
    msg_voice_heard_suffix: '" — กรอกให้แล้ว ตรวจสอบแล้วกดบันทึก',
    title_voice_heard: 'AI ได้ยิน',

    // Recurring
    msg_recurring_added_prefix: 'เพิ่มรายการประจำเดือนนี้ ',
    msg_recurring_added_suffix: ' รายการแล้ว',
    title_auto_recurring: 'Auto Recurring',

    // CSV
    msg_csv_import_prefix: 'นำเข้าสำเร็จ ',
    msg_csv_import_suffix: ' รายการ',
    title_csv_import: 'นำเข้า CSV',
    msg_no_data_export: 'ยังไม่มีข้อมูลสำหรับส่งออก',
    msg_export_success: 'ส่งออกข้อมูลสำเร็จ',
    csv_col_date: 'วันที่',
    csv_col_detail: 'รายละเอียด',
    csv_col_type: 'ประเภท',
    csv_col_category: 'หมวดหมู่',
    csv_col_amount: 'จำนวนเงิน',
    csv_col_recurring: 'รายการประจำ',
    csv_type_saving: 'ออมเงิน',
    csv_type_income: 'รายรับ',
    csv_type_expense: 'รายจ่าย',
    csv_yes: 'ใช่',
    csv_no: 'ไม่ใช่',
    csv_filename: 'รายการ',

    // AI evaluation
    msg_ai_no_data: 'ยังไม่มีข้อมูลให้วิเคราะห์เลยครับ ลองบันทึกรายการก่อนนะ!',
    ai_rank_void: 'ยศ: 👻 สุญญากาศทางการเงิน',
    ai_rank_label_offline: 'ยศ (ออฟไลน์): ',
    ai_rank_label_online: 'ยศ (AI วิเคราะห์): ',
    ai_reevaluate_btn: '✨ ให้ AI ประเมินอีกครั้ง',
    title_ai_mode_confirm: 'ปิดใช้งาน AI ของจริง?',
    msg_ai_mode_confirm: 'ระบบจะปิด AI (Groq) ชั่วคราว และกลับไปใช้ระบบวิเคราะห์แบบออฟไลน์',
    btn_ai_disable: 'ปิดใช้งาน',
    msg_online_ai_enabled: 'เปลี่ยนเป็น AI ประเมินจริง (ออนไลน์) แล้ว',
    msg_offline_mode: 'กลับสู่โหมดออฟไลน์แล้ว',
    msg_no_internet: 'ต้องมีอินเทอร์เน็ตเพื่อใช้งาน AI ของจริงครับ!',
    title_no_internet: 'ไม่มีเน็ต',
    msg_api_key_required: 'กรุณาใส่ Groq API Key ในเมนูตั้งค่าก่อนครับ',
    msg_api_key_saved: 'บันทึก API Key และเชื่อมต่อสมอง AI แล้ว!',
    msg_api_key_cleared: 'ล้างค่า API Key แล้ว (จะกลับไปใช้ออฟไลน์)',
    msg_groq_error: 'Groq API มีปัญหา! ใช้ระบบออฟไลน์ชั่วคราว',

    // AI offline rank names
    ai_rank_spinner:  'นักหมุนเงินระดับสิบ',
    ai_rank_spender:  'สายเปย์ไร้รอยต่อ',
    ai_rank_chairman: 'ท่านประธาน',
    ai_rank_saver:    'เซียนเก็บเงิน',
    ai_rank_wise:     'คนรวยมีสติ',
    ai_rank_fighter:  'นักสู้ชีวิต',
    ai_rank_monthly:  'มนุษย์เดือนชนเดือน',

    // Goal
    msg_goal_required: 'กรุณาระบุชื่อเป้าหมายและยอดเงินให้ถูกต้อง',
    msg_cancel_goal_title: 'ยกเลิกเป้าหมาย?',
    msg_cancel_goal_msg: 'กระปุกออมสินจะถูกลบ แต่รายการที่หยอดไปแล้วยังอยู่ในประวัติ',
    btn_cancel_goal_ok: 'ยกเลิกเป้าหมาย',
    msg_goal_complete: '🎉 ยินดีด้วยสุดๆ เก็บเงินเป้าหมายสำเร็จแล้ว!',
    title_congrats: 'ยินดีด้วย!',
    msg_saving_amount_required: 'กรุณาใส่จำนวนเงินให้ถูกต้อง',

    // Transaction
    msg_confirm_category_first: 'กรุณายืนยันหมวดหมู่ใหม่ก่อน',
    msg_del_tx_title: 'ลบรายการนี้?',
    msg_del_tx_msg: 'รายการนี้จะถูกลบออกถาวร ไม่สามารถกู้คืนได้',
    msg_tx_deleted: 'ลบรายการเรียบร้อยแล้ว',

    // Custom category
    msg_category_invalid: 'ชื่อไม่ถูกต้องหรือมีหมวดหมู่นี้แล้ว',
    msg_category_added_prefix: 'เพิ่มหมวดหมู่ "',
    msg_category_added_suffix: '" แล้ว',
    option_select_placeholder: 'เลือก',
    option_add_new: '+ เพิ่มใหม่...',

    // Budget
    msg_budget_incomplete: 'ข้อมูลไม่ครบถ้วน',
    msg_del_budget_title: 'ลบงบประมาณนี้?',
    msg_del_budget_prefix: 'งบประมาณหมวด "',
    msg_del_budget_suffix: '" จะถูกลบออก',
    msg_budget_deleted: 'ลบงบประมาณเรียบร้อยแล้ว',

    // Personas
    persona_female_expert_title: 'ผู้หญิง (ค่าเริ่มต้น)',
    persona_female_expert_desc:  'ฉลาด มั่นใจ อธิบายเข้าใจง่ายและเป็นกันเอง',
    persona_male_expert_title:   'ผู้ชาย',
    persona_male_expert_desc:    'สุขุม น่าเชื่อถือ อบอุ่น และมืออาชีพ',
    persona_cute_girl_title:     'วัยรุ่นหญิง',
    persona_cute_girl_desc:      'น่ารัก สดใส ร่าเริง มีแซวเล่นกวนๆ',
    persona_savage_title:        'โค้ชสายดาร์ก',
    persona_savage_desc:         'ดุดัน ตรงไปตรงมา วิจารณ์เจ็บๆ ปนตลก',

    // Date months (used in fmtDate)
    month_jan: 'ม.ค.', month_feb: 'ก.พ.', month_mar: 'มี.ค.',
    month_apr: 'เม.ย.', month_may: 'พ.ค.', month_jun: 'มิ.ย.',
    month_jul: 'ก.ค.', month_aug: 'ส.ค.', month_sep: 'ก.ย.',
    month_oct: 'ต.ค.', month_nov: 'พ.ย.', month_dec: 'ธ.ค.',
  },

  /* ─────────────────────────────────────────
     English (en)
  ───────────────────────────────────────── */
  en: {
    // Page / App identity
    page_title: 'Me Money - Personal Finance',
    app_title: 'Me Money',
    header_money_of: "Money of ",

    // Splash screen
    splash_tagline: 'Personal Finance · Easy Management',
    splash_loading: 'Loading',
    splash_step_1: 'Initializing system',
    splash_step_2: 'Loading account data',
    splash_step_3: 'Preparing charts & AI',
    splash_step_4: 'Verifying transactions',
    splash_step_5: 'Almost ready',
    splash_step_6: 'Ready! ✨',

    // Toast default titles
    toast_success_title: 'Success',
    toast_error_title: 'Error',
    toast_warning_title: 'Warning',
    toast_info_title: 'Info',

    // Confirm dialog defaults
    confirm_default_title: 'Confirm Action',
    confirm_default_msg: 'Are you sure you want to proceed?',

    // Common buttons
    btn_cancel: 'Cancel',
    btn_confirm: 'Confirm',
    btn_save: 'Save',
    btn_edit: 'Edit',
    btn_delete: 'Delete',
    btn_back: 'Back',

    // Done / Success overlay
    msg_done: 'Done!',

    // Persona modal
    title_select_persona: 'Select AI Persona',

    // Voice overlay
    voice_listening: 'Listening...',
    voice_processing: 'Processing...',
    voice_guide_html: '💡 <b>Tip:</b><br>"[Type] [Category] [Details] [Amount]"<br><br><i>e.g. "Expense Food Fried rice 5 dollars"</i>',
    btn_voice_cancel: 'Cancel',

    // PIN screen
    pin_enter_title: 'Enter PIN',

    // Header / Account
    default_account_name: 'Main Wallet',
    select_account: 'Select Account',

    // Region setup
    region_overlay_title: 'Select Region',
    region_overlay_subtitle: 'Set default language and currency',
    settings_select_region: 'Select Server / Region',
    currency_symbol: '$',
    currency_code: 'USD',

    // ── Dashboard ──────────────────────────
    label_net_balance: 'Net Balance (Available)',
    label_income_this_month: 'Income This Month',
    label_expense_this_month: 'Expenses This Month',
    chart_title_expense_ratio: 'Expense Breakdown',
    chart_tab_doughnut: 'Donut',
    chart_tab_line: 'Line',
    ai_section_title: 'AI Financial Analysis',
    btn_run_ai: 'Analyze This Account',
    ai_analyzing: 'AI is analyzing...',
    ai_rank_default: 'Rank: -',
    goal_label_saved: 'Saved: ',
    goal_label_target: 'Goal: ',
    btn_complete_goal: '🎉 Claim Achievement!',

    // ── Add tab ────────────────────────────
    tab_add_normal: 'Normal Entry',
    tab_add_saving: 'Savings',
    btn_voice_input: 'Voice Entry (AI)',
    form_title_new_record: 'New Transaction',
    form_title_edit_record: 'Edit Transaction',
    label_type: 'Type',
    option_expense: 'Expense',
    option_income: 'Income',
    label_category: 'Category',
    placeholder_category_name: 'Category name...',
    label_detail: 'Detail',
    placeholder_detail: 'Enter details...',
    label_amount: 'Amount ($)',
    label_amount_short: 'Amount',
    label_date: 'Date',
    label_recurring: 'Recurring (Auto monthly)',
    btn_save_data: 'Save',
    btn_cancel_edit: 'Cancel Edit',

    // Saving section
    title_set_saving_goal: 'Set Saving Goal',
    label_goal_name: 'Goal Name',
    placeholder_goal_name: 'Japan trip, iPhone...',
    label_goal_amount: 'Target Amount ($)',
    btn_create_piggy_bank: 'Create Piggy Bank',
    btn_cancel_goal: 'Cancel Goal',
    label_saved_so_far: 'Saved:',
    label_goal_target_short: 'Goal:',
    title_add_to_piggy: 'Add to Piggy Bank 🪙',
    btn_save_saving: 'Save Savings',
    btn_cancel_saving_edit: 'Cancel',
    default_saving_detail: 'Piggy bank deposit',
    default_saving_category: 'Savings',

    // ── History tab ────────────────────────
    title_history: 'Transaction History',
    tab_hist_normal: 'Normal',
    tab_hist_saving: 'Savings',
    placeholder_search: 'Search...',
    label_goal_prefix: 'Goal: ',
    recurring_tag: 'Recurring',
    btn_edit_item: 'Edit',
    btn_delete_item: 'Delete',
    empty_no_data: 'No transactions found',

    // ── Budget tab ─────────────────────────
    title_monthly_budget: 'Monthly Budget',
    placeholder_budget_amount: 'Amount',
    btn_add_budget: 'Add Budget',
    empty_no_budget: 'No budget set yet',
    budget_over_prefix: 'Over ',
    budget_remaining_prefix: 'Remaining ',

    // ── Settings (main) ────────────────────
    title_settings: 'Settings',
    default_username: 'User',
    default_profile_bio: 'Financial goals...',
    settings_manage_accounts: 'Manage & Switch Accounts',
    settings_edit_profile: 'Edit Profile',
    settings_pin_lock: 'PIN Lock',
    settings_dark_mode: 'Dark Mode',
    settings_export_csv: 'Export CSV',
    settings_import_csv: 'Import CSV',
    settings_real_ai: 'Use Real AI (Online)',
    settings_api_key: 'API Key Settings (AI Brain)',

    // Settings — edit profile
    title_edit_profile: 'Edit Profile',
    label_username: 'Username',
    placeholder_your_name: 'Enter your name...',
    label_bio: 'Bio',
    placeholder_bio: 'Goals for this year...',
    label_ai_persona: 'AI Personality (Advisor)',
    btn_select_persona: '🤖 Select Persona',

    // Settings — PIN
    title_pin_settings: 'Password (PIN)',
    label_enable_pin: 'Enable PIN',
    label_set_pin: 'Set 4-digit PIN',
    btn_save_pin: 'Save PIN',

    // Settings — accounts
    title_your_accounts: 'Your Accounts',
    title_add_new_account: '+ Add New Account',
    label_account_name: 'Account Name',
    placeholder_account_name: 'e.g. Cash, Bank A',
    label_account_type: 'Type',
    option_cash: 'Cash',
    option_bank: 'Bank',
    option_credit_card: 'Credit Card',
    option_other: 'Others',
    placeholder_account_detail: 'For paying...',
    btn_create_account: 'Create Account',
    tooltip_clear_acc: 'Clear transactions',
    tooltip_del_acc: 'Delete account',

    // Settings — API Key
    title_ai_brain_settings: 'AI Brain Settings',
    api_why_title: '🤔 Why enter your own API Key?',
    api_why_desc: 'For <b>ultimate security</b>! This app works 100% Offline (no backend server spying on your data). Using your own key ensures no one sees your financial data and prevents others from stealing your AI quota.',
    api_how_to_title: '🛠️ How to get your Groq API Key (Free & Fast)',
    api_step_1: 'Go to',
    api_step_2: 'Login with your Gmail account',
    api_step_3: 'Click <b>Create API key</b>',
    api_step_4: 'Copy the code (starting with gsk_) and paste it below',
    label_api_key: 'Your API Key',
    btn_save_api_key: '💾 Save API Key',

    // Bottom nav
    nav_overview: 'Overview',
    nav_add: 'Add',
    nav_history: 'Transactions',
    nav_budget: 'Budget',

    // ── JS Toast / Confirm messages ────────

    // PIN
    msg_pin_disabled: 'PIN lock disabled',
    msg_pin_invalid: 'Please set a 4-digit numeric PIN only',
    title_pin_invalid: 'Invalid PIN',
    msg_pin_saved: 'PIN saved. Takes effect next time you open the app.',

    // Account management
    msg_clear_acc_title: 'Clear transactions in this account?',
    msg_clear_acc_msg: 'Balance resets to 0 but account name remains. Cannot be undone.',
    btn_clear_data: 'Clear Data',
    msg_acc_cleared: 'Transactions cleared',
    msg_del_acc_title: 'Delete this account?',
    msg_del_acc_msg: 'All transactions will be permanently deleted. Cannot be undone.',
    btn_delete_acc: 'Delete Account',
    msg_acc_deleted: 'Account deleted',
    msg_cant_del_last_acc: 'Cannot delete the last account',
    msg_acc_name_required: 'Please enter an account name',

    // Voice
    msg_voice_not_supported: 'Browser not supported. Use Chrome/Safari',
    title_voice_not_supported: 'Voice Not Supported',
    msg_voice_error_prefix: 'Error: ',
    msg_voice_heard_prefix: 'AI heard: "',
    msg_voice_heard_suffix: '" — Pre-filled for you. Review and tap Save.',
    title_voice_heard: 'AI Heard',

    // Recurring
    msg_recurring_added_prefix: 'Added ',
    msg_recurring_added_suffix: ' recurring item(s) for this month',
    title_auto_recurring: 'Auto Recurring',

    // CSV
    msg_csv_import_prefix: 'Successfully imported ',
    msg_csv_import_suffix: ' item(s)',
    title_csv_import: 'Import CSV',
    msg_no_data_export: 'No data to export',
    msg_export_success: 'Data exported successfully',
    csv_col_date: 'Date',
    csv_col_detail: 'Detail',
    csv_col_type: 'Type',
    csv_col_category: 'Category',
    csv_col_amount: 'Amount',
    csv_col_recurring: 'Recurring',
    csv_type_saving: 'Savings',
    csv_type_income: 'Income',
    csv_type_expense: 'Expense',
    csv_yes: 'Yes',
    csv_no: 'No',
    csv_filename: 'transactions',

    // AI evaluation
    msg_ai_no_data: 'No data to analyze yet. Try adding some transactions first!',
    ai_rank_void: 'Rank: 👻 Financial Void',
    ai_rank_label_offline: 'Rank (Offline): ',
    ai_rank_label_online: 'Rank (AI Analysis): ',
    ai_reevaluate_btn: '✨ Re-evaluate with AI',
    title_ai_mode_confirm: 'Disable Real AI?',
    msg_ai_mode_confirm: 'The system will temporarily disable AI (Groq) and switch to offline analysis.',
    btn_ai_disable: 'Disable',
    msg_online_ai_enabled: 'Switched to Real AI (Online)',
    msg_offline_mode: 'Switched to offline mode',
    msg_no_internet: 'Internet connection required for Real AI!',
    title_no_internet: 'No Internet',
    msg_api_key_required: 'Please enter your Groq API Key in settings first.',
    msg_api_key_saved: 'API Key saved and AI connected!',
    msg_api_key_cleared: 'API Key cleared (will use offline mode)',
    msg_groq_error: 'Groq API error! Using offline mode temporarily.',

    // AI offline rank names
    ai_rank_spinner:  'Level-10 Money Spinner',
    ai_rank_spender:  'Nonstop Spender',
    ai_rank_chairman: 'The Chairman',
    ai_rank_saver:    'Master Saver',
    ai_rank_wise:     'Wise & Wealthy',
    ai_rank_fighter:  'Life Fighter',
    ai_rank_monthly:  'Month-to-Month Human',

    // Goal
    msg_goal_required: 'Please enter a valid goal name and amount',
    msg_cancel_goal_title: 'Cancel Goal?',
    msg_cancel_goal_msg: 'The piggy bank will be deleted, but past transactions remain in history.',
    btn_cancel_goal_ok: 'Cancel Goal',
    msg_goal_complete: '🎉 Congratulations! You\'ve reached your savings goal!',
    title_congrats: 'Congratulations!',
    msg_saving_amount_required: 'Please enter a valid amount',

    // Transaction
    msg_confirm_category_first: 'Please confirm the new category first',
    msg_del_tx_title: 'Delete this item?',
    msg_del_tx_msg: 'This item will be permanently deleted. Cannot be undone.',
    msg_tx_deleted: 'Transaction deleted',

    // Custom category
    msg_category_invalid: 'Invalid name or category already exists',
    msg_category_added_prefix: 'Added category "',
    msg_category_added_suffix: '"',
    option_select_placeholder: 'Select',
    option_add_new: '+ Add new...',

    // Budget
    msg_budget_incomplete: 'Incomplete data',
    msg_del_budget_title: 'Delete this budget?',
    msg_del_budget_prefix: 'Budget for "',
    msg_del_budget_suffix: '" will be deleted',
    msg_budget_deleted: 'Budget deleted',

    // Personas
    persona_female_expert_title: 'Female Expert (Default)',
    persona_female_expert_desc:  'Smart, confident, explains clearly and in a friendly way',
    persona_male_expert_title:   'Male Expert',
    persona_male_expert_desc:    'Calm, trustworthy, warm and professional',
    persona_cute_girl_title:     'Young Woman',
    persona_cute_girl_desc:      'Cute, lively, cheerful and playfully teasing',
    persona_savage_title:        'Dark Coach',
    persona_savage_desc:         'Fierce, blunt, brutally honest with dark humor',

    // Date months (used in fmtDate)
    month_jan: 'Jan', month_feb: 'Feb', month_mar: 'Mar',
    month_apr: 'Apr', month_may: 'May', month_jun: 'Jun',
    month_jul: 'Jul', month_aug: 'Aug', month_sep: 'Sep',
    month_oct: 'Oct', month_nov: 'Nov', month_dec: 'Dec',
  }
};
