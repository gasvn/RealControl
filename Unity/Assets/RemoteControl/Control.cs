using UnityEngine;
using System.Collections;
using System;
using BestHTTP;
using BestHTTP.WebSocket;
using BestHTTP.Examples;
public class Control : MonoBehaviour {
    Vector2 scrollPos;
    public int CONTROLLER = 0;
    WebSocket w;
    public int OP_UP = 0;
    public int OP_DOWN = 1;
    public int OP_LEFT = 2;
    public int OP_RIGHT = 3;
    public bool StartConnect = true;
    public string json;
    public byte[] byteArray;
    public class ControlData
    {
        public int sender;
        public int action;

    }
    ControlData data = new ControlData();

    // Use this for initialization
    void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
    void OnGUI()
    {
        if (GUILayout.Button("START", GUILayout.MaxWidth(70)))
        {
            w = new WebSocket(new Uri("ws://127.0.0.1:3000/"));
            w.Open();
        }
        if (GUILayout.Button("UP"))
        {

            data.sender = CONTROLLER;
            data.action = OP_UP;
            json = JsonUtility.ToJson(data);
            Debug.Log(json);
            byteArray = System.Text.Encoding.Default.GetBytes(json);
            w.Send(byteArray);
        }
        if (GUILayout.Button("RIGHT"))
        {

            data.sender = CONTROLLER;
            data.action = OP_RIGHT;
            json = JsonUtility.ToJson(data);
            Debug.Log(json);
            byteArray = System.Text.Encoding.Default.GetBytes(json);
            w.Send(byteArray);
        }
        if (GUILayout.Button("LEFT"))
        {

            data.sender = CONTROLLER;
            data.action = OP_LEFT;
            json = JsonUtility.ToJson(data);
            Debug.Log(json);
            byteArray = System.Text.Encoding.Default.GetBytes(json);
            w.Send(byteArray);
        }
        if (GUILayout.Button("DOWN"))
        {

            data.sender = CONTROLLER;
            data.action = OP_DOWN;
            json = JsonUtility.ToJson(data);
            Debug.Log(json);
            byteArray = System.Text.Encoding.Default.GetBytes(json);
            w.Send(byteArray);
        }



    }
}
