export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      blood_request: {
        Row: {
          auth_id: string;
          request_bag_qnty: number | null;
          request_blood_type: string | null;
          request_caption: string | null;
          request_created_at: string | null;
          request_donation_status: string | null;
          request_file: string | null;
          request_hospital: string | null;
          request_id: string;
          request_recipient: string | null;
          request_updated_at: string | null;
          request_urgency_lvl: string | null;
        };
        Insert: {
          auth_id?: string;
          request_bag_qnty?: number | null;
          request_blood_type?: string | null;
          request_caption?: string | null;
          request_created_at?: string | null;
          request_donation_status?: string | null;
          request_file?: string | null;
          request_hospital?: string | null;
          request_id?: string;
          request_recipient?: string | null;
          request_updated_at?: string | null;
          request_urgency_lvl?: string | null;
        };
        Update: {
          auth_id?: string;
          request_bag_qnty?: number | null;
          request_blood_type?: string | null;
          request_caption?: string | null;
          request_created_at?: string | null;
          request_donation_status?: string | null;
          request_file?: string | null;
          request_hospital?: string | null;
          request_id?: string;
          request_recipient?: string | null;
          request_updated_at?: string | null;
          request_urgency_lvl?: string | null;
        };
        Relationships: [];
      };
      blood_type: {
        Row: {
          auth_id: string;
          type_blood_group: string;
          type_id: string;
          type_rh_factor: string | null;
        };
        Insert: {
          auth_id?: string;
          type_blood_group: string;
          type_id?: string;
          type_rh_factor?: string | null;
        };
        Update: {
          auth_id?: string;
          type_blood_group?: string;
          type_id?: string;
          type_rh_factor?: string | null;
        };
        Relationships: [];
      };
      eligibility_test: {
        Row: {
          auth_id: string | null;
          test_birthdate: string | null;
          test_created_at: string;
          test_fname: string | null;
          test_gender: string | null;
          test_id: string;
          test_lname: string | null;
          test_q1: string | null;
          test_q10: string | null;
          test_q11: string | null;
          test_q12: string | null;
          test_q13: string | null;
          test_q14: string | null;
          test_q15: string | null;
          test_q16: string | null;
          test_q17: string | null;
          test_q18: string | null;
          test_q19: string | null;
          test_q2: string | null;
          test_q20: string | null;
          test_q21: string | null;
          test_q22: string | null;
          test_q23: string | null;
          test_q24: string | null;
          test_q25: string | null;
          test_q26: string | null;
          test_q27: string | null;
          test_q28: string | null;
          test_q29: string | null;
          test_q3: string | null;
          test_q30: string | null;
          test_q31: string | null;
          test_q32: string | null;
          test_q33: string | null;
          test_q34: string | null;
          test_q35: string | null;
          test_q36: string | null;
          test_q37: string | null;
          test_q38: string | null;
          test_q39: string | null;
          test_q4: string | null;
          test_q40: string | null;
          test_q41: string | null;
          test_q42: string | null;
          test_q5: string | null;
          test_q6: string | null;
          test_q7: string | null;
          test_q8: string | null;
          test_q9: string | null;
          test_result: string | null;
        };
        Insert: {
          auth_id?: string | null;
          test_birthdate?: string | null;
          test_created_at?: string;
          test_fname?: string | null;
          test_gender?: string | null;
          test_id?: string;
          test_lname?: string | null;
          test_q1?: string | null;
          test_q10?: string | null;
          test_q11?: string | null;
          test_q12?: string | null;
          test_q13?: string | null;
          test_q14?: string | null;
          test_q15?: string | null;
          test_q16?: string | null;
          test_q17?: string | null;
          test_q18?: string | null;
          test_q19?: string | null;
          test_q2?: string | null;
          test_q20?: string | null;
          test_q21?: string | null;
          test_q22?: string | null;
          test_q23?: string | null;
          test_q24?: string | null;
          test_q25?: string | null;
          test_q26?: string | null;
          test_q27?: string | null;
          test_q28?: string | null;
          test_q29?: string | null;
          test_q3?: string | null;
          test_q30?: string | null;
          test_q31?: string | null;
          test_q32?: string | null;
          test_q33?: string | null;
          test_q34?: string | null;
          test_q35?: string | null;
          test_q36?: string | null;
          test_q37?: string | null;
          test_q38?: string | null;
          test_q39?: string | null;
          test_q4?: string | null;
          test_q40?: string | null;
          test_q41?: string | null;
          test_q42?: string | null;
          test_q5?: string | null;
          test_q6?: string | null;
          test_q7?: string | null;
          test_q8?: string | null;
          test_q9?: string | null;
          test_result?: string | null;
        };
        Update: {
          auth_id?: string | null;
          test_birthdate?: string | null;
          test_created_at?: string;
          test_fname?: string | null;
          test_gender?: string | null;
          test_id?: string;
          test_lname?: string | null;
          test_q1?: string | null;
          test_q10?: string | null;
          test_q11?: string | null;
          test_q12?: string | null;
          test_q13?: string | null;
          test_q14?: string | null;
          test_q15?: string | null;
          test_q16?: string | null;
          test_q17?: string | null;
          test_q18?: string | null;
          test_q19?: string | null;
          test_q2?: string | null;
          test_q20?: string | null;
          test_q21?: string | null;
          test_q22?: string | null;
          test_q23?: string | null;
          test_q24?: string | null;
          test_q25?: string | null;
          test_q26?: string | null;
          test_q27?: string | null;
          test_q28?: string | null;
          test_q29?: string | null;
          test_q3?: string | null;
          test_q30?: string | null;
          test_q31?: string | null;
          test_q32?: string | null;
          test_q33?: string | null;
          test_q34?: string | null;
          test_q35?: string | null;
          test_q36?: string | null;
          test_q37?: string | null;
          test_q38?: string | null;
          test_q39?: string | null;
          test_q4?: string | null;
          test_q40?: string | null;
          test_q41?: string | null;
          test_q42?: string | null;
          test_q5?: string | null;
          test_q6?: string | null;
          test_q7?: string | null;
          test_q8?: string | null;
          test_q9?: string | null;
          test_result?: string | null;
        };
        Relationships: [];
      };
      events: {
        Row: {
          date: string;
          id: string;
          location: string | null;
          partners: string | null;
          tagline: string | null;
          time: string | null;
          title: string;
          venue: string | null;
        };
        Insert: {
          date: string;
          id?: string;
          location?: string | null;
          partners?: string | null;
          tagline?: string | null;
          time?: string | null;
          title: string;
          venue?: string | null;
        };
        Update: {
          date?: string;
          id?: string;
          location?: string | null;
          partners?: string | null;
          tagline?: string | null;
          time?: string | null;
          title?: string;
          venue?: string | null;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          auth_id: string | null;
          content: string;
          created_at: string | null;
          id: string;
          is_read: boolean | null;
          receiver_id: string | null;
          sender_id: string | null;
          status: string | null;
        };
        Insert: {
          auth_id?: string | null;
          content: string;
          created_at?: string | null;
          id?: string;
          is_read?: boolean | null;
          receiver_id?: string | null;
          sender_id?: string | null;
          status?: string | null;
        };
        Update: {
          auth_id?: string | null;
          content?: string;
          created_at?: string | null;
          id?: string;
          is_read?: boolean | null;
          receiver_id?: string | null;
          sender_id?: string | null;
          status?: string | null;
        };
        Relationships: [];
      };
      notifications: {
        Row: {
          date: string;
          id: number;
          is_read: boolean | null;
          org_id: string | null;
          read_by_org: boolean | null;
          read_by_user: boolean | null;
          title: string;
          user_id: string | null;
        };
        Insert: {
          date: string;
          id?: number;
          is_read?: boolean | null;
          org_id?: string | null;
          read_by_org?: boolean | null;
          read_by_user?: boolean | null;
          title: string;
          user_id?: string | null;
        };
        Update: {
          date?: string;
          id?: number;
          is_read?: boolean | null;
          org_id?: string | null;
          read_by_org?: boolean | null;
          read_by_user?: boolean | null;
          title?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      organization: {
        Row: {
          auth_id: string;
          org_barangay: string | null;
          org_city: string | null;
          org_country: string | null;
          org_currentAddress: string | null;
          org_dateStarted: string | null;
          org_email: string | null;
          org_id: string;
          org_name: string | null;
          org_password: string | null;
          org_phoneNumber: number | null;
          org_region: string | null;
          org_type: string | null;
          org_zipcode: number | null;
        };
        Insert: {
          auth_id?: string;
          org_barangay?: string | null;
          org_city?: string | null;
          org_country?: string | null;
          org_currentAddress?: string | null;
          org_dateStarted?: string | null;
          org_email?: string | null;
          org_id?: string;
          org_name?: string | null;
          org_password?: string | null;
          org_phoneNumber?: number | null;
          org_region?: string | null;
          org_type?: string | null;
          org_zipcode?: number | null;
        };
        Update: {
          auth_id?: string;
          org_barangay?: string | null;
          org_city?: string | null;
          org_country?: string | null;
          org_currentAddress?: string | null;
          org_dateStarted?: string | null;
          org_email?: string | null;
          org_id?: string;
          org_name?: string | null;
          org_password?: string | null;
          org_phoneNumber?: number | null;
          org_region?: string | null;
          org_type?: string | null;
          org_zipcode?: number | null;
        };
        Relationships: [];
      };
      response_comment: {
        Row: {
          auth_id: string | null;
          comment: string;
          request_id: string | null;
          response_comment_created_at: string | null;
          response_comment_id: number;
        };
        Insert: {
          auth_id?: string | null;
          comment: string;
          request_id?: string | null;
          response_comment_created_at?: string | null;
          response_comment_id?: number;
        };
        Update: {
          auth_id?: string | null;
          comment?: string;
          request_id?: string | null;
          response_comment_created_at?: string | null;
          response_comment_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "response_comment_request_id_fkey";
            columns: ["request_id"];
            isOneToOne: false;
            referencedRelation: "blood_request";
            referencedColumns: ["request_id"];
          }
        ];
      };
      response_like: {
        Row: {
          auth_id: string | null;
          request_id: string | null;
          response_like_created_at: string | null;
          response_like_id: number;
        };
        Insert: {
          auth_id?: string | null;
          request_id?: string | null;
          response_like_created_at?: string | null;
          response_like_id?: number;
        };
        Update: {
          auth_id?: string | null;
          request_id?: string | null;
          response_like_created_at?: string | null;
          response_like_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "response_like_request_id_fkey";
            columns: ["request_id"];
            isOneToOne: false;
            referencedRelation: "blood_request";
            referencedColumns: ["request_id"];
          }
        ];
      };
      user: {
        Row: {
          auth_id: string;
          user_barangay: string | null;
          user_birthdate: string | null;
          user_city: string | null;
          user_country: string | null;
          user_currentAddress: string | null;
          user_email: string | null;
          user_firstname: string;
          user_gender: string | null;
          user_id: string;
          user_lastname: string | null;
          user_middlename: string | null;
          user_password: string | null;
          user_phoneNumber: number | null;
          user_region: string | null;
          user_zipcode: number | null;
        };
        Insert: {
          auth_id?: string;
          user_barangay?: string | null;
          user_birthdate?: string | null;
          user_city?: string | null;
          user_country?: string | null;
          user_currentAddress?: string | null;
          user_email?: string | null;
          user_firstname: string;
          user_gender?: string | null;
          user_id?: string;
          user_lastname?: string | null;
          user_middlename?: string | null;
          user_password?: string | null;
          user_phoneNumber?: number | null;
          user_region?: string | null;
          user_zipcode?: number | null;
        };
        Update: {
          auth_id?: string;
          user_barangay?: string | null;
          user_birthdate?: string | null;
          user_city?: string | null;
          user_country?: string | null;
          user_currentAddress?: string | null;
          user_email?: string | null;
          user_firstname?: string;
          user_gender?: string | null;
          user_id?: string;
          user_lastname?: string | null;
          user_middlename?: string | null;
          user_password?: string | null;
          user_phoneNumber?: number | null;
          user_region?: string | null;
          user_zipcode?: number | null;
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
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
