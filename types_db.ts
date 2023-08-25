export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      guests: {
        Row: {
          attending: boolean | null;
          created_at: string | null;
          first_name: string | null;
          gluten_intolerant: boolean | null;
          id: number;
          lactose_intolerant: boolean | null;
          last_name: string | null;
          nut_allergy: boolean | null;
          other_requirements: string | null;
          shellfish_allergy: boolean | null;
          vegetarian: boolean | null;
        };
        Insert: {
          attending?: boolean | null;
          created_at?: string | null;
          first_name?: string | null;
          gluten_intolerant?: boolean | null;
          id?: number;
          lactose_intolerant?: boolean | null;
          last_name?: string | null;
          nut_allergy?: boolean | null;
          other_requirements?: string | null;
          shellfish_allergy?: boolean | null;
          vegetarian?: boolean | null;
        };
        Update: {
          attending?: boolean | null;
          created_at?: string | null;
          first_name?: string | null;
          gluten_intolerant?: boolean | null;
          id?: number;
          lactose_intolerant?: boolean | null;
          last_name?: string | null;
          nut_allergy?: boolean | null;
          other_requirements?: string | null;
          shellfish_allergy?: boolean | null;
          vegetarian?: boolean | null;
        };
        Relationships: [];
      };
      liked_songs: {
        Row: {
          created_at: string | null;
          song_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          song_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          song_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "liked_songs_song_id_fkey";
            columns: ["song_id"];
            referencedRelation: "songs";
            referencedColumns: ["id"];
          }
        ];
      };
      songs: {
        Row: {
          author: string | null;
          created_at: string | null;
          id: number;
          image_path: string | null;
          song_path: string | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          author?: string | null;
          created_at?: string | null;
          id?: number;
          image_path?: string | null;
          song_path?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          author?: string | null;
          created_at?: string | null;
          id?: number;
          image_path?: string | null;
          song_path?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year";
      pricing_type: "one_time" | "recurring";
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
