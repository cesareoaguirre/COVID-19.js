// JavaScript Document
/*
	Created by: @CesareoAguirre. 
	Hope it works. Please let me know your proyect and implementations. 
	Database update will be wellcome
*/
/* 
	 SMDiseaseRecordFile stores a record in time wich may have as many objects as countries in the Database
	Query by country? try: 
		var diseaseRecords=new SMDiseaseRecords("World-Records-DB", world_records);
		var diseaseRecordFile=records.getRecordIndex(0);
		diseaseRecordFile.getRecordObjectByID('DZ|Algeria');
*/
var utilities=function(){
	/* force a number */
	this.getInteger=function(value){
		var value=parseInt(value);
			value=(isNaN(value)? 0: value);
		return value;
	}
	return this;
}();
var SMADiseaseRecordStruct=function (recordsID, infections, cured, deaths, delta_infections, delta_cured, delta_deaths){
	this.log=function (msg){
		//console.log("SMADiseaseRecordStruct["+recordsID+"] "+msg);
	}
	this.log("SMADiseaseRecordStruct(recordsID: "+recordsID+", infections: "+infections+", delta_infections: "+delta_infections+")");
	this.recordsID=recordsID; /* example: DZ|Algeria*/
	this.infections=infections /* int */;
	this.cured=cured; /* int */
	this.deaths=deaths; /* int */
	this.delta_infections=delta_infections; /* difference in respect prev sibling */
	this.delta_cured=delta_cured; /* difference in respect prev sibling */
	this.delta_deaths=delta_deaths; /* difference in respect prev sibling */
}

var SMDiseaseRecordFile=function(recordFileIndex, recordFileData, previousRecordFileData=null){
	this.log=function (msg){
		console.log("recordFileData["+recordFileIndex+"] "+msg);
		//console.log(this.recordFileIndex+"."+msg);
	}
	this.recordFileIndex=recordFileIndex; /* the index from 0 to length*/
	this.log("SMDiseaseRecordFile(recordFileIndex: "+recordFileIndex+", recordFileData: "+recordFileData+", previousRecordFileData: "+previousRecordFileData+")");
	this.recordFileData=recordFileData; /* the source data */
	this.recordObjects={}; /* a container for all countries in this record in time */
	this.date=0; /* the date of the record. Excel generates an integer wich will be converted to date */
	this.new_infections=0;
	this.total_infections=0;
	this.total_infections_delta=0;
	this.total_infections_increase_ratio=0;
	this.total_cured=0;
	this.total_deaths=0;
	this.total_infections_averages=0;
	this.topmost_infections=0;
	this.increase_ratio=1;
	this.init=function(){
		var objects_count=0;
		for (var r in this.recordFileData){
			var record=this.recordFileData[r];
			if (r=="Fecha"||r=="Fuente"||r=="WH|Unknown"){
				if (r=="Fecha"){
					this.log("		Fecha "+record);
					/* 
						LA FECHA DEL RECORD ESTÁ EN FORMATO EXCEL, PERO EN EXCEL LAS FECHAS COMIENZAN EL PRIMER DÍA DE 1900. TUVE QUE RESTARLE 1 PARA QUE COINCIDIERA EN MIS REGISTROS.
					*/
					this.date=new Date(1900, 00, 01);
					this.date.setDate(record-1);
					this.log("			this.date "+this.date);
				}
				continue;
			}
			objects_count++;
			/* EN ESTA VERSIÓN CADA RECORD SOLO CONTIENE LA CANTIDAD DE CASOS POSITIVOS */
			var total_infections=utilities.getInteger(record);
			//this.log("record item["+r+"] have "+infections);
			var total_infections_delta=total_infections;
			var new_infections=total_infections;
			var prev_total_infections=0;
			increase_ratio=1;
			if (previousRecordFileData!=null){
				var previousRecord=previousRecordFileData[r];
				var prev_total_infections=utilities.getInteger(previousRecord);
			}
				//this.log("		prev_total_infections["+r+"] "+prev_total_infections);
				total_infections_delta=total_infections-prev_total_infections;
				new_infections=Math.max(0, total_infections_delta);
				//(total_infections>prev_total_infections? total_infections-prev_total_infections:0);
				/* Lo siento, estoy un poquito cansado y confundido aquí. Mi intención es saber el porcentaje de aumento con respecto de la fecha anterior */
				increase_ratio=1-prev_total_infections/total_infections;
				increase_ratio=(isNaN(increase_ratio)? 0: increase_ratio);
			/*
			this.log("		total_infections["+r+"] "+total_infections);
			this.log("			prev_total_infections["+r+"] "+prev_total_infections);
			this.log("			total_infections_delta["+r+"] "+total_infections_delta);
			this.log("			increase_ratio["+r+"] "+increase_ratio);
			this.log("			new_infections["+r+"] "+new_infections);*/
			/* we got the record data and it will be  stored in a SMADiseaseRecordStruct */
			var recordObject=new SMADiseaseRecordStruct(r, total_infections, 0, 0, total_infections_delta, 0, 0);
			this.recordObjects[r]=recordObject;
			this.total_infections+=total_infections;
			this.new_infections+=new_infections;
			this.total_infections_delta+=total_infections_delta;
			this.total_infections_increase_ratio+=increase_ratio;
			this.topmost_infections=Math.max(this.topmost_infections, total_infections);

		}
		this.total_infections_average=this.total_infections/objects_count;
		this.total_infections_delta+=total_infections_delta/objects_count;
		this.total_infections_increase_ratio+=increase_ratio/objects_count;
		/*
		this.log("	total_infections: "+this.total_infections);
		this.log("	total_infections_average: "+this.total_infections_average);
		this.log("	total_infections_increase_ratio: "+this.total_infections_increase_ratio);
		this.log("	increase_ratio: "+this.increase_ratio);
		*/
	}
	/* no furter calculations, it will return straight values */
	this.getDate=function(){
		return this.date;
	}
	this.getIncreaseRatio=function(){
		return this.increase_ratio;
	}
	this.getTopmostInfections=function(){
		return this.topmost_infections;
	}
	this.getTotalInfections=function(){
		return this.total_infections;
	}
	this.getNewInfections=function(){
		return this.new_infections;
	}
	this.getTotalInfectionsDelta=function(){
		return this.total_infections_delta;
	}
	this.getTotalInfectionsIncreaseRatio=function(){
		return this.total_infections_increase_ratio;
	}
	this.getRecordObjectByID=function(name){
		return this.recordObjects[name];
	}
	this.init();
	return this;
}
var SMDiseaseRecords=function(recordsID, records){
	this.log=function (msg){
		//console.log("SMDiseaseRecords["+recordsID+"] "+msg);
	}
	this.log("SMDiseaseRecords(recordsID: "+recordsID+", records: "+records+")");
	this.recordsID=recordsID; /* The name of your project or database. Example: "My Database" */
	this.records=records;
	this.total_records=0;						
	this.indexed_records=[];
	this.init=function(){
		this.log("init()");
		this.indexed_records=[];
		this.log("creating locations");
		this.total_records=0;
		this.total_infections=0;
		this.total_infections_average_delta=0;
		this.total_infections_delta=0;
		this.topmost_infections=0;
		var last_recordFile, last_record_data=null, infections_delta=0;
		for (var r in this.records){
			var record_data=this.records[r];
			//this.log("	record["+r+"]: "+record_data);
			var recordFile=new SMDiseaseRecordFile(this.indexed_records.length, record_data, last_record_data); 
			this.indexed_records.push(recordFile);
			this.total_infections+=recordFile.getNewInfections()
			this.total_infections_delta+=recordFile.getTotalInfectionsDelta();;
			this.total_infections_increase_ratio+=recordFile.getTotalInfectionsIncreaseRatio();
			this.topmost_infections=Math.max(recordFile.getTopmostInfections(), this.topmost_infections);
			/*
			this.recordObjects[r]=recordObject;
			this.total_infections+=new_infections;
			this.total_infections_delta+=total_infections_delta;
			this.total_infections_increase_ratio+=increase_ratio;
			this.topmost_infections=Math.max(this.topmost_infections, total_infections);
			*/
			this.total_records++;
			this.log("	recordFile.infections: "+recordFile.getTotalInfections());
			this.log("	recordFile.topmost_infections: "+recordFile.getTopmostInfections());
			this.log("	total_infections_delta: "+this.total_infections_delta);
			this.topmost_infections=Math.max(recordFile.getTotalInfections(), this.topmost_infections);
			last_recordFile=recordFile;
			last_record_data=record_data;
		}
		this.total_infections_average_delta=this.total_infections_delta/this.total_records;
		this.total_infections_average=this.total_infections/this.total_records;
		this.inited=true;
		this.log("this.total_infections: "+this.total_infections);
		this.log("this.total_infections_average_delta: "+this.total_infections_average_delta);
		this.log("this.total_infections_average: "+this.total_infections_average);
		this.log("this.total_infections_average: "+this.total_infections_average);
		this.log("this.topmost_infections: "+this.topmost_infections);
		//this.topmost_infections=Math.max(record.infections, this.topmost_infections);
	}
	this.getRecordsLength=function (){
		return this.total_records;
	}
	this.getRecordIndex=function(index){
		return this.indexed_records[index];
	}
	this.getTopmostInfections=function(){
		return this.topmost_infections;
	}
	this.getAverageInfectionsDelta=function(){
		return this.total_infections_average;
	}
	this.getTotalInfections=function(){
		return this.total_infections;
	}
	/*
	this.getAverageInfections=function(){
		return this.total_infections_average;
	}
	*/
	this.init();
	return this;
}