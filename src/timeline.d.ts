export interface Timeline {
  page: number;
  per_page: number;
  total_pages: number;
  coubs: Coub[];
}

// https://coub.com/dev/docs/Coub+API%2FData+stuctures

interface Coub {
  //flag: false;
  //abuses: null;
  //recoubs_by_users_channels: [1803073];
  //favourite: false;
  //promoted_id: null;

  /// if recoub then check `recoub_to`
  recoub: true;
  //like: true;
  //dislike: false;
  //reaction: "heart";
  //in_my_best2015: false;
  id: number; // 184082540;
  //type: "Coub::Recoub";
  permalink: "319hdl";
  title: "b3gin";
  //visibility_type: "public";
  //original_visibility_type: "public";
  // owner of the coub
  channel_id: 1803073;
  created_at: "2022-03-18T14:04:06Z";
  updated_at: "2022-03-18T14:04:06Z";
  //is_done: true;
  views_count: 45263;
  //cotd: null;
  //cotd_at: null;
  //visible_on_explore_root: false;
  //visible_on_explore: false;
  //featured: false;
  //published: true;
  //published_at: "2022-03-18T14:04:06Z";
  //reversed: false;
  //from_editor_v2: true;
  //is_editable: false;
  //original_sound: true;
  //has_sound: true;
  recoub_to: {
    flag: false;
    abuses: null;
    recoubs_by_users_channels: [1803073];
    favourite: false;
    promoted_id: null;
    recoub: true;
    like: true;
    dislike: false;
    reaction: "heart";
    in_my_best2015: false;
    id: number; //183965180;
    type: "Coub::Simple";
    permalink: "316wi9";
    title: "b3gin";
    visibility_type: "public";
    original_visibility_type: "public";
    channel_id: 10764054;
    created_at: "2022-03-16T18:42:34Z";
    updated_at: "2022-03-19T09:58:12Z";
    is_done: true;
    views_count: 45263;
    cotd: null;
    cotd_at: null;
    visible_on_explore_root: true;
    visible_on_explore: true;
    featured: true;
    published: true;
    published_at: "2022-03-16T18:42:34Z";
    reversed: false;
    from_editor_v2: true;
    is_editable: true;
    original_sound: false;
    has_sound: false;
    recoub_to: null;
    file_versions: {
      html5: {
        video: {
          higher: {
            url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_huge_size_1647456184_muted_huge.mp4";
            size: 6668369;
          };
          high: {
            url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_big_size_1647456184_muted_big.mp4";
            size: 4323087;
          };
          med: {
            url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_med_size_1647456184_muted_med.mp4";
            size: 1624198;
          };
        };
        audio: {
          high: {
            url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/537f0a13eac/81af4879733490b7ba0a1/1647456199_mp3-high.mp3";
            size: 1087567;
          };
          med: {
            url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/8c78fe8f5d1/2a5d12686391cc5b1d35b/1647456198_mp3-med.mp3";
            size: 798555;
          };
        };
      };
      mobile: {
        video: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_med_size_1647456184_muted_med.mp4";
        audio: [
          "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/8c78fe8f5d1/2a5d12686391cc5b1d35b/1647456198_mp3-med.mp3"
        ];
      };
      share: {
        default: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_video_for_sharing/b77c835cfb9/2cad2437fbfc677fae516/1647456321_looped_1647456318.mp4";
      };
    };
    audio_versions: {
      template: "https://coub-anubis-a.akamaized.net/coub_storage/audio_track/cw_file/9a5af79d88a/662388ceaa510c7c074e8/mid_1647456187_1s8lv0y_edited.mp3";
      versions: ["mid", "low"];
    };
    image_versions: {
      template: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_image/6cc62e7a974/3f851d145cf00d46f79cd/%{version}_1647456228_00032.jpg";
      versions: [
        "micro",
        "tiny",
        "age_restricted",
        "ios_large",
        "ios_mosaic",
        "big",
        "med",
        "small",
        "pinterest"
      ];
    };
    first_frame_versions: {
      template: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/7b4d1e4387d/497c1695e5641f6008c02/%{version}_1647456226_image.jpg";
      versions: ["big", "med", "small", "ios_large"];
    };
    dimensions: {
      big: [1280, 720];
      med: [640, 360];
    };
    site_w_h: [640, 360];
    page_w_h: [640, 360];
    site_w_h_small: [310, 174];
    size: [1280, 720];
    age_restricted: false;
    age_restricted_by_admin: false;
    not_safe_for_work: false;
    allow_reuse: false;
    dont_crop: true;
    banned: false;
    global_safe: true;
    audio_file_url: "https://coub-anubis-a.akamaized.net/coub_storage/audio_track/cw_file/9a5af79d88a/662388ceaa510c7c074e8/low_1647456187_1s8lv0y_edited.mp3";
    external_download: false;
    application: null;
    channel: {
      id: 10764054;
      permalink: "gr33d.coub";
      title: "9i6agHocmb";
      description: null;
      i_follow_him: false;
      follows_by_users_channels: [];
      followers_count: 384;
      following_count: 0;
      avatar_versions: {
        template: "https://coub-anubis-a.akamaized.net/coub_storage/channel/cw_avatar/272f2532b24/ef3ebda374898ff50bb35/%{version}_1638025675_FA_BmJmVkAoEWKN.jpg";
        versions: [
          "medium",
          "medium_2x",
          "profile_pic",
          "profile_pic_new",
          "profile_pic_new_2x",
          "tiny",
          "tiny_2x",
          "small",
          "small_2x",
          "ios_large",
          "ios_small"
        ];
      };
    };
    file: null;
    picture: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_image/6cc62e7a974/3f851d145cf00d46f79cd/med_1647456228_00032.jpg";
    timeline_picture: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/7b4d1e4387d/497c1695e5641f6008c02/ios_large_1647456226_image.jpg";
    small_picture: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_image/6cc62e7a974/3f851d145cf00d46f79cd/ios_mosaic_1647456228_00032.jpg";
    sharing_picture: null;
    percent_done: 100;
    tags: [
      {
        id: 3072;
        title: "art";
        value: "art";
      },
      {
        id: 424;
        title: "animation";
        value: "animation";
      },
      {
        id: 3934;
        title: "animated";
        value: "animated";
      },
      {
        id: 86;
        title: "music";
        value: "music";
      },
      {
        id: 10803;
        title: "electronic";
        value: "electronic";
      },
      {
        id: 165;
        title: "anime";
        value: "anime";
      },
      {
        id: 6777998;
        title: "the darkness within";
        value: "the%20darkness%20within";
      }
    ];
    categories: [
      {
        id: 2;
        title: "Art & Design";
        permalink: "art";
        subscriptions_count: 10098963;
        big_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/big_1544749302_art2.png";
        small_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/small_1544749302_art2.png";
        med_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/med_1544749302_art2.png";
        visible: true;
      }
    ];
    communities: [
      {
        id: 2;
        title: "Art & Design";
        permalink: "art";
        subscriptions_count: 10098963;
        big_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/big_1544749302_art2.png";
        small_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/small_1544749302_art2.png";
        med_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/med_1544749302_art2.png";
        i_subscribed: true;
        community_notifications_enabled: false;
        description: {
          id: 41;
          description: "Коубы об искусстве и дизайне.\n\n**Что можно?**\nВсе виды изобразительного и цифрового искусства: архитектура, скульптура, графика, живопись, 3д-графика и моушн-дизайн.\n\n**Что нельзя?**\nКоубы, нарушающие [правила площадки](https://coub.com/rules). Для анимированного пиксель-арта и синемаграфов мы сделали сообщество [Live Pictures](https://coub.com/community/live-pictures). Фан-арт необходимо размещать в сообществах, посвящённых источнику оригинального произведения. Например, для игр – [Gaming](https://coub.com/community/gaming), для Аниме – [Anime](https://coub.com/community/anime).";
          rules: [];
          description_html: '<p>Коубы об искусстве и дизайне.&nbsp;\n&nbsp;\n<strong>Что можно?</strong>&nbsp;\nВсе виды изобразительного и цифрового искусства: архитектура, скульптура, графика, живопись, 3д-графика и моушн-дизайн.&nbsp;\n&nbsp;\n<strong>Что нельзя?</strong>&nbsp;\nКоубы, нарушающие <a href="https://coub.com/rules" target="_blank" rel="noopener noreferrer">правила площадки</a>. Для анимированного пиксель-арта и синемаграфов мы сделали сообщество <a href="https://coub.com/community/live-pictures" target="_blank" rel="noopener noreferrer">Live Pictures</a>. Фан-арт необходимо размещать в сообществах, посвящённых источнику оригинального произведения. Например, для игр – <a href="https://coub.com/community/gaming" target="_blank" rel="noopener noreferrer">Gaming</a>, для Аниме – <a href="https://coub.com/community/anime" target="_blank" rel="noopener noreferrer">Anime</a>.</p>\n';
          rules_html: [];
        };
      }
    ];
    recoubs_count: 183;
    remixes_count: 0;
    likes_count: 712;
    dislikes_count: 0;
    raw_video_id: 17196110;
    uploaded_by_ios_app: false;
    uploaded_by_android_app: false;
    media_blocks: {
      uploaded_raw_videos: [];
      external_raw_videos: [];
      remixed_from_coubs: [];
    };
    raw_video_thumbnail_url: "https://coub-anubis-a.akamaized.net/coub_storage/raw_video/cw_image/8d101c5bd99/1645f5ade5403f14e98d4/coub_media_1647455443_image.jpg";
    raw_video_title: "________MV__________.mp4";
    video_block_banned: false;
    duration: 9.96;
    promo_winner: false;
    promo_winner_recoubers: null;
    editorial_info: {};
    promo_hint: null;
    beeline_best_2014: null;
    from_web_editor: true;
    normalize_sound: false;
    normalize_change_allowed: true;
    best2015_addable: false;
    ahmad_promo: null;
    promo_data: null;
    audio_copyright_claim: null;
    ads_disabled: false;
    is_safe_for_ads: true;
    megafon_contents: [];
  };
  file_versions: {
    html5: {
      video: {
        [key in "higher" | "high" | "med"]: { url: string; size: number };
        // higher: {
        //   url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_huge_size_1647456184_muted_huge.mp4";
        //   size: 6668369;
        // };
        // high: {
        //   url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_big_size_1647456184_muted_big.mp4";
        //   size: 4323087;
        // };
        // med: {
        //   url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_med_size_1647456184_muted_med.mp4";
        //   size: 1624198;
        // };
      };
      audio: {
        [key in "higher" | "high" | "med"]: { url: string; size: number };
        // high: {
        //   url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/537f0a13eac/81af4879733490b7ba0a1/1647456199_mp3-high.mp3";
        //   size: 1087567;
        // };
        // med: {
        //   url: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/8c78fe8f5d1/2a5d12686391cc5b1d35b/1647456198_mp3-med.mp3";
        //   size: 798555;
        // };
      };
    };
    // mobile: {
    //   video: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_file/35e3f226fae/fadb24fef9941203592d7/muted_mp4_med_size_1647456184_muted_med.mp4";
    //   audio: [
    //     "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/8c78fe8f5d1/2a5d12686391cc5b1d35b/1647456198_mp3-med.mp3"
    //   ];
    // };
    share: {
      default: string; //"https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_video_for_sharing/b77c835cfb9/2cad2437fbfc677fae516/1647456321_looped_1647456318.mp4";
    };
  };
  //   audio_versions: {
  //     template: "https://coub-anubis-a.akamaized.net/coub_storage/audio_track/cw_file/9a5af79d88a/662388ceaa510c7c074e8/mid_1647456187_1s8lv0y_edited.mp3";
  //     versions: ["mid", "low"];
  //   };
  //   image_versions: {
  //     template: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_image/6cc62e7a974/3f851d145cf00d46f79cd/%{version}_1647456228_00032.jpg";
  //     versions: [
  //       "micro",
  //       "tiny",
  //       "age_restricted",
  //       "ios_large",
  //       "ios_mosaic",
  //       "big",
  //       "med",
  //       "small",
  //       "pinterest"
  //     ];
  //   };
  //   first_frame_versions: {
  //     template: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/7b4d1e4387d/497c1695e5641f6008c02/%{version}_1647456226_image.jpg";
  //     versions: ["big", "med", "small", "ios_large"];
  //   };
  //   dimensions: {
  //     big: [1280, 720];
  //     med: [640, 360];
  //   };
  //   site_w_h: [640, 360];
  //   page_w_h: [640, 360];
  //   site_w_h_small: [310, 174];
  //   size: [1280, 720];
  //   age_restricted: false;
  //   age_restricted_by_admin: false;
  //   not_safe_for_work: null;
  //   allow_reuse: false;
  //   dont_crop: true;
  //   banned: false;
  //   global_safe: null;
  //   audio_file_url: null;
  //   external_download: false;
  //   application: null;
  channel: {
    id: 1803073;
    permalink: "lite.one";
    title: "Lite_OnE";
    description: null;
    i_follow_him: false;
    follows_by_users_channels: [];
    followers_count: 29;
    following_count: 39;
    avatar_versions: {
      template: "https://coub-anubis-a.akamaized.net/coub_storage/channel/cw_avatar/605abdb5127/79817746b85d4442b27b0/%{version}_1607952550_19k2olw_1474570170__________-1.jpg";
      versions: [
        "medium",
        "medium_2x",
        "profile_pic",
        "profile_pic_new",
        "profile_pic_new_2x",
        "tiny",
        "tiny_2x",
        "small",
        "small_2x",
        "ios_large",
        "ios_small"
      ];
    };
  };
  //   file: null;
  //   picture: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_image/6cc62e7a974/3f851d145cf00d46f79cd/med_1647456228_00032.jpg";
  //   timeline_picture: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/7b4d1e4387d/497c1695e5641f6008c02/ios_large_1647456226_image.jpg";
  //   small_picture: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_image/6cc62e7a974/3f851d145cf00d46f79cd/ios_mosaic_1647456228_00032.jpg";
  //   sharing_picture: null;
  //   percent_done: 100;
  tags: Array<{
    id: number;
    title: string; // ok to save only title
    value: string;
  }>;
  //[
  // {
  //   id: 3072;
  //   title: "art";
  //   value: "art";
  // },
  // {
  //   id: 424;
  //   title: "animation";
  //   value: "animation";
  // },
  // {
  //   id: 3934;
  //   title: "animated";
  //   value: "animated";
  // },
  // {
  //   id: 86;
  //   title: "music";
  //   value: "music";
  // },
  // {
  //   id: 10803;
  //   title: "electronic";
  //   value: "electronic";
  // },
  // {
  //   id: 165;
  //   title: "anime";
  //   value: "anime";
  // },
  // {
  //   id: 6777998;
  //   title: "the darkness within";
  //   value: "the%20darkness%20within";
  // }
  //];
  //   categories: [
  //     {
  //       id: 2;
  //       title: "Art & Design";
  //       permalink: "art";
  //       subscriptions_count: 10098963;
  //       big_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/big_1544749302_art2.png";
  //       small_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/small_1544749302_art2.png";
  //       med_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/med_1544749302_art2.png";
  //       visible: true;
  //     }
  //   ];
  //   communities: [
  //     {
  //       id: 2;
  //       title: "Art & Design";
  //       permalink: "art";
  //       subscriptions_count: 10098963;
  //       big_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/big_1544749302_art2.png";
  //       small_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/small_1544749302_art2.png";
  //       med_image_url: "https://coub-anubis-a.akamaized.net/coub_storage/category/cw_image/bc49636b5e9/9d819c4215f13ccf07a7b/med_1544749302_art2.png";
  //       i_subscribed: true;
  //       community_notifications_enabled: false;
  //       description: {
  //         id: 41;
  //         description: "Коубы об искусстве и дизайне.\n\n**Что можно?**\nВсе виды изобразительного и цифрового искусства: архитектура, скульптура, графика, живопись, 3д-графика и моушн-дизайн.\n\n**Что нельзя?**\nКоубы, нарушающие [правила площадки](https://coub.com/rules). Для анимированного пиксель-арта и синемаграфов мы сделали сообщество [Live Pictures](https://coub.com/community/live-pictures). Фан-арт необходимо размещать в сообществах, посвящённых источнику оригинального произведения. Например, для игр – [Gaming](https://coub.com/community/gaming), для Аниме – [Anime](https://coub.com/community/anime).";
  //         rules: [];
  //         description_html: '<p>Коубы об искусстве и дизайне.&nbsp;\n&nbsp;\n<strong>Что можно?</strong>&nbsp;\nВсе виды изобразительного и цифрового искусства: архитектура, скульптура, графика, живопись, 3д-графика и моушн-дизайн.&nbsp;\n&nbsp;\n<strong>Что нельзя?</strong>&nbsp;\nКоубы, нарушающие <a href="https://coub.com/rules" target="_blank" rel="noopener noreferrer">правила площадки</a>. Для анимированного пиксель-арта и синемаграфов мы сделали сообщество <a href="https://coub.com/community/live-pictures" target="_blank" rel="noopener noreferrer">Live Pictures</a>. Фан-арт необходимо размещать в сообществах, посвящённых источнику оригинального произведения. Например, для игр – <a href="https://coub.com/community/gaming" target="_blank" rel="noopener noreferrer">Gaming</a>, для Аниме – <a href="https://coub.com/community/anime" target="_blank" rel="noopener noreferrer">Anime</a>.</p>\n';
  //         rules_html: [];
  //       };
  //     }
  //   ];
  //   recoubs_count: 183;
  //   remixes_count: 0;
  likes_count: 712;
  //   dislikes_count: 0;
  //   raw_video_id: 17196110;
  //   uploaded_by_ios_app: false;
  //   uploaded_by_android_app: false;
  //   media_blocks: {
  //     uploaded_raw_videos: [];
  //     external_raw_videos: [];
  //     remixed_from_coubs: [];
  //   };
  //   raw_video_thumbnail_url: "https://coub-anubis-a.akamaized.net/coub_storage/raw_video/cw_image/8d101c5bd99/1645f5ade5403f14e98d4/coub_media_1647455443_image.jpg";
  raw_video_title: "________MV__________.mp4";
  //video_block_banned: false;
  duration: 9.96;
  //   promo_winner: false;
  //   promo_winner_recoubers: null;
  //   editorial_info: {};
  //   promo_hint: null;
  //   beeline_best_2014: null;
  //   from_web_editor: true;
  //   normalize_sound: false;
  //   normalize_change_allowed: false;
  //   best2015_addable: false;
  //   ahmad_promo: null;
  //   promo_data: null;
  //   audio_copyright_claim: null;
  //   ads_disabled: null;
  //   is_safe_for_ads: true;
  //   megafon_contents: [];
  //   position_on_page: 1;
}
